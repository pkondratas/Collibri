import React from 'react';
import { Box, Button, Modal} from '@mui/material';
import { Check, Clear } from '@mui/icons-material';
import { customModal, modalContent } from "../styles/CModalStyle";

const CModal = (props) => {  
  return (
    <>
      <Modal open={props.showModal} onClose={props.handleClose}>
        <Box sx={customModal} align="center">
          {props.children}
          <Box sx={modalContent}>
            <Button onClick={props.handleClose}>
              <Clear />
            </Button>
            <Button onClick={props.handleChanges}>
              <Check />
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default CModal;