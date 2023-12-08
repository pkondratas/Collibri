export const PostStyle = {
  cardStyle: {
    backgroundColor: '#B9F5D9',
    //backgroundColor: '#1D1E18',
    minWidth: "40rem",
    maxHeight: "12rem",
    ':hover': {
      boxShadow: 10
    }
  },
  contentBox: {
    display: "flex",
    flexDirection: 'row',
    height: "5rem"
  },
  title: {
    //color: '#FFFFFF',
    //color: '#DEFEF5',
    //color: '#B9F5D9'
    //color: '#80CB9E'
    color: '#1D1E18'
  },
  description: {
    color: '#1D1E18',
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    minHeight: "2.6rem",
    minWidth: "34rem",
    maxWidth: "34rem",
    maxHeight: "2.6rem",
    lineHeight: "1.3rem"
  },
  editingBox: {
    display: "flex",
    flexDirection: "column"
  },
  editingButtons: {
    color: '#316C44',
    visibility: 'hidden',
    marginLeft: '0.5rem',
    marginBottom: '0.5rem',
    ':hover': {
      boxShadow: 2,
      backgroundColor: '#80CB9E',
    }
  },
  buttonBox:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonComponent: {
    marginRight: "0.3rem",
    ':hover': {
      boxShadow: 2,
      backgroundColor: '#80CB9E',
    }
  },
  reactionButtons: {
    color: '#316C44',
    marginLeft: "0.2rem",
    marginBottom: "0.2rem",
  },
  likeCount: {
    color: '#1D1E18',
  },
  updated: {
    color: '#1D1E18',
    //textShadow: '1px 1px 2px gray'
  }
}