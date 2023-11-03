import AddBoxIcon from "@mui/icons-material/AddBox";
import {Box, IconButton} from "@mui/material";
import React, {useState} from "react";
import {CreatePostModal} from "./CreatePostModal";
import {createInitialPost} from "../api/CreatePostApi";


export const AddPostButton = (props) => {
    const [open, setOpen] = useState(false);
    const [postId, setPostId] = useState(0)
    
    const handleOpen = () => {
        createInitialPost(props.sectionId, setPostId);
        setOpen(true);
    }
    
    return (
        <Box>
            <IconButton color="success" onClick={handleOpen}>
                <AddBoxIcon/>
            </IconButton>
            <CreatePostModal showModal={open} setOpen={setOpen} postId={postId}/>
        </Box>
    );
}