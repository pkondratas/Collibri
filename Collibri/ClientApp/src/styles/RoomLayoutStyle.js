export const RoomLayoutStyle = {
  grid: {
    display: 'flex',
  },
  roomGrid: {
    width:'17%',
  },
  roomDrawer: {
    width: '17%',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '17%',
      backgroundColor: '#64f597',
      boxSizing: 'border-box',
    },
  },
  title: {
    color: 'black', 
    fontWeight: 'bold',
  },
  titleBox: {
    width: '90%',
    display: 'flex',
    justifyContent: 'center',
  },
}

export const postContainerStyle = { 
  maxWidth: "43rem" 
}

export const RoomLayoutStyles = {
  addSettingsButtons: {
    width: '3rem',
    height: '3rem',
    marginBottom: '0.9rem',
  }
}