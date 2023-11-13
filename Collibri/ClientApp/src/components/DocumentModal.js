import React from "react";
import {Box, Modal, Typography} from "@mui/material";
import {documentModal} from "../styles/DocumentModalStyles";

const DocumentModal = (props) => {
    const handleClose = () => {
        props.setDocumentModal(false);
    }
    
    return(
        <Modal open={props.documentModal} onClose={handleClose}>
            <Box sx={documentModal}>
                <Box>
                    <Typography variant="h2">
                        {props.title}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body1">
                        {props.text}
                    </Typography>
                </Box>
            </Box>
        </Modal>
    );
}

export default DocumentModal;