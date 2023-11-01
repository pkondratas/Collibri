export const PostModalStyles = {
  modalStyle: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80rem',
    height: '38rem',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: '2rem'
  },
  
  info: {
    display: 'flex'
  },
  
  descriptionBox: {
    marginLeft: '5rem'
  },
  
  title: {
    minWidth: '22rem',
    maxWidth: '22rem',
    lineHeight: '3.5rem',
    minHeight: '7rem',
    maxHeight: '7rem',
    overflow: 'hidden',
    marginTop: '1rem'
  },
  
  description: {
    wordBreak: 'break-all',
    overflow: 'hidden',
    lineHeight: '1.27rem',
    minHeight: '3.8rem',
    minWidth: '45rem',
    maxHeight: '3.8rem',
    maxWidth: '45rem',
    marginTop: '1rem'
  },

  userAndDateBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.5rem',
  },
  
  contentBox: {
    minWidth: '72rem',
    maxWidth: '72rem',
    minHeight: '24rem',
    maxHeight: '24rem'
  },

  buttonBox: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '72rem',
    maxWidth: '72rem',
  },
  
  closeButton: {
    width: '3rem',
    height: '3rem',
    marginLeft: '1rem',
  }
}