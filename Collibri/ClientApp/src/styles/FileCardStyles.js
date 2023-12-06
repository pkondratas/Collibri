export const FileCardStyles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '10rem',
        width: '20rem',
    },
    imageBox: {
        display: 'block',
        margin: 'auto',
        position: 'relative',
    },
    media: {
        height: '7rem',
        width: '20rem',
        objectFit: 'scale-down'
    },
    content: {
        ':hover': {
            opacity: 0.8
        },
        backgroundColor: "#d5d5d5",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '4rem',
        width: '20rem'
    }
}