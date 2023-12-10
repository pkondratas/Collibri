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
  },

  info: {
    display: 'flex',
    backgroundColor: '#D9FFF5',
    //backgroundColor: '#B9F5D8',
    paddingTop: '2rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    paddingBottom: '1rem'
  },

  descriptionBox: {
    marginLeft: '5rem'
  },

  title: {
    wordBreak: 'break-all',
    minWidth: '22rem',
    maxWidth: '22rem',
    lineHeight: '3.5rem',
    minHeight: '7rem',
    maxHeight: '7rem',
    overflow: 'hidden',
    marginTop: '1rem',
    textAlign: 'center'
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
    display: 'flex',
    overflowX: 'auto'
  },
  
  contentBoxContainer: {
    minHeight: '15.5rem',
    maxHeight: '15.5rem',
    backgroundColor: '#6B8F71',
  },
  
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '1.5rem',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    paddingBottom: '1.5rem',
    backgroundColor: '#D9FFF5',
  },
  
  tagBox: {
    display: 'flex',
    backgroundColor: '#97C4B8',
    boxShadow: 1,
    borderRadius: 2,
    //minWidth: 300,
  },
  
  tagChip: {
    display: 'flex',
    boxShadow: 1,
    backgroundColor: '#AAD2BA',
  },

  closeButton: {
    width: '3rem',
    height: '3rem',
    marginLeft: '1rem',
  },

  reactionButton: {
    marginLeft: '0.5rem',
    marginBottom: '0.2rem'
  },
  
  addButton: {
    margin: '0.5rem',
    width: '3rem',
    height: '3rem'
  },
  
  addIcon: {
    width: '2rem',
    height: '2rem'
  },
  
  list: {
    display: 'flex',
    maxHeight: '13rem',
    maxWidth: '70rem',
    // minWidth: '70rem',
    overflowX: 'auto',
  },
  
  tagList: {
    display: 'flex',
    overflowX: 'auto',
  },
  
  editDeleteButtons: {
    marginRight: '2rem' 
  },
  
  optionButtons: {
    // backgroundColor: 'red',
    width: '7rem'
    // minHeight: '2rem'
    // flex: 1
  },
  
  optionButtonBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AAD2BA',
    paddingTop: '1rem',
    paddingBottom: '0.5rem',
  },
  
  emptyListMessage: {
    display: 'flex', 
    alignItems: 'center', 
    height: '10rem', 
    width: '72rem', 
    justifyContent: 'center',
  }
}