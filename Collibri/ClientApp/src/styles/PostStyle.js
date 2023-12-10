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
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    //color: '#FFFFFF',
    //color: '#DEFEF5',
    //color: '#B9F5D9'
    //color: '#80CB9E'
    color: '#1D1E18',
    fontSize: '250%',
    fontFamily: 'Segoe UI semibold'
  },
  description: {
    color: '#1D1E18',
    fontFamily: 'Segoe UI semibold',
    wordBreak: "break-all",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    height: '5%',
    minWidth: "90%",
    lineHeight: "1rem"
  },
  editingBox: {
    display: "flex",
    flexDirection: "column"
  },
  baseEditButton: {
    color: '#316C44',
    marginBottom: '3%',
    cursor: 'pointer',
    borderRadius: 3
  },
  deleteButton: {
    backgroundSize: '700% 100%',
    transition: '0.2s ease',
    '&:hover': {
      color: '#80CB9E',
      backgroundImage: 'linear-gradient(45deg, #cc0000, #e60000, #ff0000, #ff1a1a, #ff0000, #e60000, #cc0000)',
      boxShadow: 2,
      animation: 'glowing 20s linear infinite'
    },
    "@keyframes glowing": {
      "0%": {
        backgroundPosition: '0 0'
      },
      "50%": {
        backgroundPosition: '400% 0'
      },
      "100%": {
        backgroundPosition: '0 0'
      }
    }
  },
  editButton: {
    borderRadius: 3,
    ':hover': {
      boxShadow: 2,
      backgroundColor: '#80CB9E',
    }
  },
  buttonBox:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonComponent: {
    marginRight: "2%",
    backgroundColor: '#B9F5D9',
    borderRadius: 3,
    ':hover': {
      boxShadow: 2,
      backgroundColor: '#80CB9E',
    }
  },
  reactionButtons: {
    color: '#316C44',
    marginBottom: "5%",
  },
  selected: {
    marginRight: "2%",
    boxShadow: 2,
    backgroundColor: '#80CB9E'
  },
  likeCount: {
    color: '#1D1E18',
    marginRight: "5%",
    fontFamily: 'Segoe UI semibold'
  },
  updated: {
    color: '#1D1E18',
    fontFamily: 'Segoe UI semibold'
    //textShadow: '1px 1px 2px gray'
  }
}