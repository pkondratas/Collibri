import React, {useState} from 'react';
import AddFileModal from "../Modals/AddFileModal";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {IconButton} from "@mui/material";

const AddFileButton = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    
    return(
        <>
            <IconButton onClick={handleOpen}>
                <AddBoxIcon />
            </IconButton>
            <AddFileModal open={open} setOpen={setOpen} setFiles={props.setFiles} postId={props.postId}/>
        </>
    );
}

export default AddFileButton