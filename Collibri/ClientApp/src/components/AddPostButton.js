import AddBoxIcon from "@mui/icons-material/AddBox";
import {Box, IconButton} from "@mui/material";
import React, {useState} from "react";
import {CreatePostModal} from "./CreatePostModal";
import {createPost} from "../api/CreatePostApi";
import {fetchPosts} from "../api/PostAPI";


export const AddPostButton = (props) => {
    const [open, setOpen] = useState(false);
    const [postId, setPostId] = useState(0)
    
    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleSuccessfulClose = () => {
        fetchPosts(props.sectionId, props.setPosts);
        setOpen(false);
    }
    
    return (
        <Box>
            <IconButton color="success" onClick={handleOpen}>
                <AddBoxIcon/>
            </IconButton>
            <CreatePostModal sectionId={props.sectionId} showModal={open} setOpen={setOpen} postId={postId} handleSuccessfulClose={handleSuccessfulClose}/>
        </Box>
    );
}