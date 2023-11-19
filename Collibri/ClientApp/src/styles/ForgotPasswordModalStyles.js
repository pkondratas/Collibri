const modalStyles = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        height: '34rem',
        p: 2,
        bgcolor: '#d3d3d3',
        borderRadius: 3,
    },
    inputField: {
        backgroundColor: '#ffffff',
        borderRadius: '3px',
    },
    resetButton: {
        mt: 2,
        backgroundColor: '#757575',
        color: '#FFFFFF',
        '&:hover': {
            backgroundColor: '#757575', // Set your custom hover color here
        },
    },
    closeButtonContainer: {
        position: 'absolute', 
        top: '-5px', 
        right: '0', 
        padding: '16px'
    },
    helperText: {
        fontSize: '12px',
    },
    errorHelperText: {
        color: 'red',
        fontSize: '12px',
    },
    helperTextBox: {
        minHeight: '1.2rem'
    },
    processing: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '32rem',
        minWidth: '5rem',
    },
    progressIndicator: {
        marginTop: '1.5rem'
    },
    closeRepeatContainer: {
        display: 'flex',
        marginTop: '1.5rem',
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        paddingTop: '0.3rem'
    }
};

export default modalStyles;
