import React from "react";
import {Box, Modal, Typography} from "@mui/material";
import {DocumentModalStyles} from "../../styles/DocumentModalStyles";


const DocumentModal = (props) => {
    const handleClose = () => {
        props.setDocumentModal(false);
    }
    
    return(
        <Modal open={props.documentModal} onClose={handleClose}>
            <Box sx={DocumentModalStyles.modal}>
                <Box align='justify' sx={DocumentModalStyles.title}>
                    <Typography variant="h4">
                        {props.title}
                    </Typography>
                </Box>
                <Box sx={DocumentModalStyles.body}>
                    <Typography variant="body1">
                        {props.text}
                    </Typography>
                </Box>
            </Box>
        </Modal>
    );
}

export default DocumentModal;