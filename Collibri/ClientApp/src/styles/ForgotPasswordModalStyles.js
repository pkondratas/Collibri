const modalStyles = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        p: 2,
        bgcolor: '#d3d3d3',
        borderRadius: 3,
    },
    inputField: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
    },
    resetButton: {
        mt: 2,
        backgroundColor: '#757575',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#757575', // Set your custom hover color here
        },
    },
};

export default modalStyles;
