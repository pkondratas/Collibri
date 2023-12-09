export const PostStyle = {
  cardStyle: {
    backgroundColor: '#B9F5D9',
    width: '100%',
    //backgroundColor: '#1D1E18',
    ':hover': {
      boxShadow: 10
    }
  },
  contentBox: {
    display: "flex",
    flexDirection: 'row'
  },
  title: {
    //color: '#FFFFFF',
    //color: '#DEFEF5',
    //color: '#B9F5D9'
    //color: '#80CB9E'
    color: '#1D1E18',
    fontSize: '200%'
  },
  description: {
    color: '#1D1E18',
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    height: '10%',
    minWidth: "90%",
    lineHeight: "1rem"
  },
  editingBox: {
    display: "flex",
    flexDirection: "column"
  },
  editingButtons: {
    color: '#316C44',
    visibility: 'hidden',
    marginBottom: '3%',
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
    //marginRight: '0%',
    ':hover': {
      boxShadow: 2,
      backgroundColor: '#80CB9E',
    }
  },
  reactionButtons: {
    color: '#316C44',
    marginLeft: "5%",
    marginBottom: "5%",
  },
  likeCount: {
    color: '#1D1E18',
  },
  updated: {
    color: '#1D1E18',
    //textShadow: '1px 1px 2px gray'
  }
}