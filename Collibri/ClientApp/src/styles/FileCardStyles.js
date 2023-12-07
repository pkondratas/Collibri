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
        width: '20rem',
        aspectRatio: 3,
        objectFit: 'contain'
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