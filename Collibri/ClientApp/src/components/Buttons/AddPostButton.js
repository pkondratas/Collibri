import AddBoxIcon from "@mui/icons-material/AddBox";
import {Box, IconButton, Tooltip} from "@mui/material";
import React, {useState} from "react";
import {CreatePostModal} from "../Modals/CreatePostModal";
import {fetchPosts} from "../../api/PostAPI";

export const AddPostButton = (props) => {
    const [open, setOpen] = useState(false);
    const [postId, setPostId] = useState(0);
    const isDisabled = props.sectionId === 0;
    const handleOpen = () => {
        if (props.sectionId !== 0) {
            setOpen(true);
        }
    }
    
    const handleSuccessfulClose = () => {
        fetchPosts(props.sectionId, props.setPosts);
        setOpen(false);
    }
    
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '9%', height: '100%' }}>
            <Tooltip
                title={isDisabled ? 'Error: no section present' : ''}
                arrow
                disableHoverListener={!isDisabled}
            >
              <Tooltip title="Add post">
                  <IconButton disabled={isDisabled} color="success" onClick={handleOpen}>
                      <AddBoxIcon fontSize={"large"} />
                  </IconButton>
              </Tooltip>
              <CreatePostModal sectionId={props.sectionId} showModal={open} setOpen={setOpen} addNewPost={props.addNewPost} postId={postId} handleSuccessfulClose={handleSuccessfulClose}/>
            </Tooltip>
        </Box>
    );
}