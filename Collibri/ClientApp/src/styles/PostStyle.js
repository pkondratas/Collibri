export const PostStyle = {
  cardStyle: {
    backgroundColor: '#316C44',
    //backgroundColor: '#1D1E18',
    minWidth: "40rem",
    maxHeight: "10.5rem",
    ':hover': {
      boxShadow: 10
    }
  },
  contentBox: {
    display: "flex",
    height: "4rem"
  },
  title: {
    //color: '#FFFFFF',
    //color: '#DEFEF5',
    color: '#B9F5D9'
    //color: '#80CB9E'
  },
  description: {
    color: '#B9F5D9',
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
    color: '#B9F5D9',
    visibility: 'hidden',
    marginLeft: '0.5rem',
    ':hover': {
      boxShadow: 2
    }
  },
  buttonBox:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonComponent: {
    ':hover': {
      boxShadow: 2
    }
  },
  reactionButtons: {
    color: '#80CB9E',
    marginLeft: "0.2rem",
    marginBottom: "0.2rem",
  },
  likeCount: {
    color: '#B9F5D9',
  },
  updated: {
    color: '#B9F5D9',
  }
}