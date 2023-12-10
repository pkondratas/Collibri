import React from 'react';
import { Box, Button, Modal} from '@mui/material';
import { Check, Clear } from '@mui/icons-material';
import {CModalStyle, customModal, modalContent} from "../../styles/CModalStyle";


// custom modal template for any modal with three props: showModal bool, handleClose and handleChanges function
// can be used in any basic modal

const CModal = (props) => {  
  return (
    <>
      <Modal open={props.showModal} onClose={props.handleClose}>
        <Box sx={CModalStyle.modal} align="center">
          {props.children}
          <Box sx={CModalStyle.content}>
            <Button onClick={props.handleClose} sx={CModalStyle.buttons}>
              <Clear />
            </Button>
            <Button onClick={props.handleChanges} sx={CModalStyle.buttons}>
              <Check />
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default CModal;