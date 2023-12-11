import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import {useRef, useState} from "react";
import {Check, Clear} from "@mui/icons-material";
import {CreatePostStyle} from "../../styles/CreatePostStyle";
import {createPost} from "../../api/PostAPI";
import {useSelector} from "react-redux";
import {CModalStyle} from "../../styles/CModalStyle";

export const CreatePostModal = (props) => {

    const titleFieldRef = useRef(null);
    const descFieldRef = useRef(null);
    const [isTitleEmptyError, setIsTitleEmptyError] = useState(false);
    const [isDescEmptyError, setIsDescEmptyError] = useState(false);
    const [isTitleTooLongError, setIsTitleTooLongError] = useState(false);
    const [isDescTooLongError, setIsDescTooLongError] = useState(false);
    const userInformation = useSelector((state) => state.user);
    
    const handleOnChangeTitle = () => {
        setIsTitleEmptyError(false);
        
        if (titleFieldRef.current.value.trim().length > 20) {
            setIsTitleTooLongError(true);
        }
        else {
            setIsTitleTooLongError(false);
        }
    }

    const handleOnChangeDesc = () => {
        setIsDescEmptyError(false);

        if (descFieldRef.current.value.trim().length > 350) {
            setIsDescTooLongError(true);
        }
        else {
            setIsDescTooLongError(false);
        }
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
        if(isTitleTooLongError) {
            isOk = false;
        }
        if(isDescTooLongError) {
            isOk = false;
        }
        
        if (isOk) {
            createPost(JSON.stringify({
                Title: titleFieldRef.current.value.trim(),
                Description: descFieldRef.current.value.trim(),
                SectionId: props.sectionId,
                CreatorUsername: userInformation.username
            }), props.addNewPost);
            props.handleSuccessfulClose();
        }
    }

    const handleClose = () => {
        setIsTitleEmptyError(false);
        setIsTitleTooLongError(false);
        setIsDescEmptyError(false);
        setIsDescTooLongError(false);
        
        props.setOpen(false);
    }
    
    return (
        <Modal open={props.showModal} onClose={() => handleClose()}>
            <Box sx={CreatePostStyle.modalWindow}
                 align="center"
            >
                <Typography variant='h4' sx={[CModalStyle.text, {marginBottom: '5%'}]}>
                    Create a post
                </Typography>
                <Box sx={CreatePostStyle.textFieldBox}>
                    <TextField label="Post title" variant="standard" multiline
                               error={isTitleEmptyError || isTitleTooLongError}
                               inputRef={titleFieldRef}
                               onChange={handleOnChangeTitle}
                               helperText={
                                   isTitleEmptyError
                                       ? 'Title cannot be empty'
                                       : isTitleTooLongError 
                                            ? 'Title cannot be longer than 20 symbols' 
                                            : 'Max 20 symbols'
                               }
                               sx={CreatePostStyle.nameTextField}/>
                </Box>
                <Box sx={CreatePostStyle.textFieldBox}>
                    <TextField id="outlined-basic" label="Post description" variant="outlined"
                               error={isDescEmptyError || isDescTooLongError}
                               inputRef={descFieldRef}
                               onChange={handleOnChangeDesc}
                               multiline
                               rows={7}
                               helperText={
                                   isDescEmptyError
                                       ? 'Description cannot be empty'
                                       : isDescTooLongError 
                                            ? 'Description cannot be longer than 350 symbols' 
                                            : 'Max 350 symbols'
                               }
                               sx={CreatePostStyle.descriptionTextField}/>
                </Box>
                <Typography sx={[CreatePostStyle.warningNote, CModalStyle.text]}>
                    Creating the post will then open it and allow you to add documents, notes and files.
                </Typography>
                <Box>
                    <Button onClick={handleClose} sx={CreatePostStyle.button}><Clear/></Button>
                    <Button onClick={handleCreatePost} sx={CreatePostStyle.button}><Check/></Button>
                </Box>
            </Box>
        </Modal>
    );
}