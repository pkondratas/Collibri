import React from 'react';
import CModal from './CModal';
import { Typography } from "@mui/material";
import { deleteModalWarningStyle } from '../styles/DeleteModalStyle';

const DeleteModal = (props) => {
  const handleClose = () => props.setDeleteModal(false);
  const handleChanges = () => props.handleDelete(props.postId);
  
  return(
    <>
      <CModal handleChanges={handleChanges} handleClose={handleClose} showModal={props.deleteModal} >
        <Typography variant="h5">
          Are you sure?
        </Typography>
        <Typography variant="p" sx={deleteModalWarningStyle}>
          Deleted posts cannot be recovered.
        </Typography>
      </CModal>
    </>
  );  
}

export default DeleteModal;