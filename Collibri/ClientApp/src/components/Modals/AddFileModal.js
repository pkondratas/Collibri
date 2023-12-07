import React, {useState} from 'react';
import {Box, CircularProgress, IconButton, Modal, TextField, Tooltip} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {uploadFile} from "../../api/FileAPI";
import {AddFileStyle} from "../../styles/AddFileStyle";
import imageCompression from 'browser-image-compression';

const AddFileModal = (props) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(true);
    const [sizeError, setSizeError] = useState(false);
    const [progress, setProgress] = useState(0);
    
    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file, file.name);
        uploadFile(props.postId, formData, props.setFiles);

        handleClose();
    }
    
    const handleClose = () => {
        props.setOpen(false);
        setError(true);
        setSizeError(false);
        setFile(null);
        setProgress(0);
    }
    
    const handleOnChange = async (event) => {
        const uploadedFile = event.target.files[0];
        
        if (uploadedFile === null) {
            setError(true);
            return;
        } else if (uploadedFile.size > 5e6) {
            setSizeError(true);
        } else {
            setError(false);
        }
        
        if (uploadedFile.name.match(/\.(jpg|jpeg|png)$/i)) {
            console.log(`Image size before compression: ${uploadedFile.size / 1024} KB`)
            //Compress image
            const options = {
                maxSizeMB: 2,
                maxWidthOrHeight: 720,
                useWebWorker: true,
                onProgress: setCurrentProgress
            }
            
            try {
                const compressedFile = await imageCompression(uploadedFile, options);
                console.log(`${compressedFile.name} compressedFile size ${compressedFile.size / 1024} KB`);
                setFile(compressedFile);
            } catch (error) {
                console.log(error);
            }
        } else {
            setFile(uploadedFile);
            setError(false);
            setSizeError(false);
        }
    }
    
    const setCurrentProgress = (progressValue) => {
        setProgress(progressValue);
    }
    
    return(
        <Modal open={props.open} onClose={handleClose}>
            <Box sx={AddFileStyle.modal}>
                <TextField error={sizeError} 
                           helperText={sizeError === true ? "Files must be under 5 MB" : (error === true ? "File not selected" : "")}
                           type="file" onChange={handleOnChange}/>
                <IconButton disabled={error || sizeError || progress !== 100} onClick={handleUpload}>
                    <AddBoxIcon />
                </IconButton>
                <CircularProgress variant="determinate" value={progress} />
            </Box>
        </Modal>
    );
}

export default AddFileModal