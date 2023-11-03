import {Box, Button, Grid, Modal, TextField} from "@mui/material";
import {CreatePostStyle} from "../styles/CreatePostStyle";
import {useRef, useState} from "react";
import {updateInitialPost} from "../api/CreatePostApi";

export const CreatePostModal = (props) => {

    const titleFieldRef = useRef(null);
    const descFieldRef = useRef(null);
    const [isTitleEmptyError, setIsTitleEmptyError] = useState(false);
    const [isDescEmptyError, setIsDescEmptyError] = useState(false);
    const [isTitleTooLongError, setIsTitleTooLongError] = useState(false);
    const [isDescTooLongError, setIsDescTooLongError] = useState(false);
    
    const handleOnChangeTitle = () => {
        setIsTitleEmptyError(false);
        setIsTitleTooLongError(false);
    }

    const handleOnChangeDesc = () => {
        setIsDescEmptyError(false);
        setIsDescTooLongError(false);
    }
    
    function handleCreatePost() {
        let isOk = true;
        
        if (titleFieldRef.current.value.trim() === '') {
            setIsTitleEmptyError(true);
            isOk = false;
        }
        if (descFieldRef.current.value.trim() === '') {
            setIsDescEmptyError(true);
            isOk = false;
        }
        if(titleFieldRef.current.value.trim().length > 20) {
            setIsTitleTooLongError(true);
            isOk = false;
        }
        if(descFieldRef.current.value.trim().length > 350) {
            setIsDescTooLongError(true);
            isOk = false;
        }
        
        if (isOk === true) {
            updateInitialPost(props.postId, 
                JSON.stringify({
                    Title: titleFieldRef.current.value.trim(),
                    Description: descFieldRef.current.value.trim()
                })
            );
            props.handleSuccessfulClose();
        }
    }

    const handleClose = () => {
        handleOnChangeTitle();
        handleOnChangeDesc();
        props.setOpen(false);
    }
    
    return (
        <Modal open={props.showModal}>
            <Box sx={CreatePostStyle.modalWindow}
                 align="center"
            >
                <Grid container spacing={1}
                      direction="row"
                      justifyContent="space-evenly"
                      alignItems="strech"
                >
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" label="Post title" variant="outlined" multiline
                                   error={isTitleEmptyError || isTitleTooLongError}
                                   inputRef={titleFieldRef}
                                   onChange={handleOnChangeTitle}
                                   helperText={
                                       isTitleEmptyError
                                           ? 'Title cannot be empty'
                                           : isTitleTooLongError 
                                                ? 'Title cannot be longer than 20 symbols' 
                                                : ' '
                                   }
                                   sx={CreatePostStyle.nameTextField}/>
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="outlined-basic" label="Post description" variant="outlined"
                                   error={isDescEmptyError || isDescTooLongError}
                                   inputRef={descFieldRef}
                                   onChange={handleOnChangeDesc}
                                   helperText={
                                       isDescEmptyError
                                           ? 'Description cannot be empty'
                                           : isDescTooLongError 
                                                ? 'Description cannot be longer than 350 symbols' 
                                                : ' '
                                   }
                                   sx={CreatePostStyle.descriptionTextField}/>
                    </Grid>
                    <Grid item xs={12}>notes</Grid>
                    <Grid item xs={12}>documents</Grid>
                    <Grid item xs={12}>files</Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleClose}>Cancel</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleCreatePost}>Create</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}