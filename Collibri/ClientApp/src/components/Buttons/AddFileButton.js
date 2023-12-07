import React, {useState} from 'react';
import AddFileModal from "../Modals/AddFileModal";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import {IconButton} from "@mui/material";

const AddFileButton = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    
    return(
        <>
            <IconButton onClick={handleOpen}>
                <UploadFileIcon />
            </IconButton>
            <AddFileModal open={open} setOpen={setOpen} setFiles={props.setFiles} postId={props.postId}/>
        </>
    );
}

export default AddFileButton