import React, {useState} from 'react';
import {Box, IconButton, Modal, TextField, Tooltip} from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import {uploadFile} from "../../api/FileAPI";
import {AddFileStyle} from "../../styles/AddFileStyle";

const AddFileModal = (props) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(true);
    const [sizeError, setSizeError] = useState(false);

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('file', file);
        uploadFile(props.postId, formData, props.setFiles);

        props.setOpen(false);
    }
    
    const handleClose = () => {
        props.setOpen(false);
        setError(false);
        setSizeError(false);
        setFile(null);
    }
    
    const handleOnChange = (event) => {
        const uploadedFile = event.target.files[0];
        setError(false);
        setSizeError(false);
        
        if (uploadedFile === undefined || uploadedFile === null) {
            setError(true);
            return;
        } else if (uploadedFile.size > 10e6) {
            setSizeError(true);
        } else {
            setError(false);
        }
        
        setFile(uploadedFile);
    }
    
    return(
        <Modal open={props.open} onClose={handleClose}>
            <Box sx={AddFileStyle.modal}>
                <TextField error={sizeError} 
                           helperText={sizeError === true ? "Files must be under 10 MB" : (error === true ? "File not selected" : "")}
                           type="file" onChange={handleOnChange}/>
                <Tooltip
                    title={sizeError === true ? "Files must be under 10 MB" : (error === true ? "File not selected" : "")}
                    arrow
                    disableHoverListener={!(error || sizeError)}>
                    <IconButton disabled={error || sizeError} onClick={handleUpload}>
                        <AddBoxIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Modal>
    );
}

export default AddFileModal