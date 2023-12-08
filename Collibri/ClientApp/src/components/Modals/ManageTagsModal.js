import {
    Box, Button, List, ListItemButton, ListItemIcon, ListItemText,
    Modal, TextField,
} from "@mui/material";
import {ManageTagsModalStyle} from "../../styles/ManageTagsModalStyle";
import {useRef, useState} from "react";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import {createTag} from "../../api/TagAPI";

export const ManageTagsModal = (props) => {
    
    const [selectedIndex, setSelectedIndex] = useState("");
    const [isEmptyError, setIsEmptyError] = useState(false);
    const [isTooLongError, setIsTooLongError] = useState(false);
    const fieldRef =useRef(null);
    
    const handleClose = () => {
        setIsEmptyError(false);
        setIsTooLongError(false);
        props.setOpen(false);
    }
    
    const handleOnChange = () => {
        setIsEmptyError(false);

        if (fieldRef.current.value.trim().length > 20) {
            setIsTooLongError(true);
        }
        else {
            setIsTooLongError(false);
        }
    }
    
    const handleAddTag = () => {
        let isOk = true;

        if(fieldRef.current.value.trim() === '')
        {
            setIsEmptyError(true);
            isOk = false;
        }
        if(isTooLongError)
        {
            isOk = false;
        }
        
        if(isOk)
        {
            createTag(JSON.stringify({
                Name: fieldRef.current.value.trim(),
                RoomId: props.roomId
            }))
        }
    }
    
    return (
        <Modal open={props.showModal} onClose={() => handleClose()}>
            <Box sx={ManageTagsModalStyle.modalWindow}>
                <Box sx={ManageTagsModalStyle.controlBox}>
                    <TextField id="outlined-basic" label="Tag name" variant="outlined" multiline
                               error={isEmptyError || isTooLongError}
                               inputRef={fieldRef}
                               onChange={handleOnChange}
                               helperText={
                                   isEmptyError
                                       ? 'Name cannot be empty'
                                       : isTooLongError
                                           ? 'Name cannot be longer than 20 symbols'
                                           : 'Max 20 symbols'
                               }
                               />
                    <Button onClick={handleAddTag}>
                        Add
                    </Button>
                </Box>
                <Box sx={ManageTagsModalStyle.listBox}>
                    <List sx={ManageTagsModalStyle.tagList}>
                        {props.tags.map((tag) => (
                                <ListItemButton
                                    key={tag.id}
                                    selected={selectedIndex === tag.id}
                                    onClick={() => {setSelectedIndex(tag.id)}}
                                >
                                    <ListItemIcon>
                                        <LocalOfferIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={tag.name}/>
                                </ListItemButton>
                            ))}
                    </List> 
                </Box>
            </Box>
        </Modal>
    );
}