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
    container2: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 275,
        height: '13.75rem',
        p: 2,
        bgcolor: '#d3d3d3',
        borderRadius: 3,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '35rem',
        height: '21rem',
        p: 2,
        bgcolor: '#DEFEF5',
        borderRadius: 3,
    },
    topContainer: {
        padding: '0.3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    inputField: {
        borderRadius: '8px',
        fontFamily: 'Segoe UI',
        width: '15rem'
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
        opacity: '0.6'
    },
    errorHelperText: {
        color: 'red',
        fontSize: '12px',
        fontFamily: 'Segoe UI'
    },
    helperTextBox: {
        minHeight: '1.2rem',
        fontFamily: 'Segoe UI'
    },
    processing: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    progressIndicator: {
        marginTop: '1.5rem'
    },
    closeRepeatContainer: {
        display: 'flex',
        marginTop: '1.5rem',
    },
    title: {
        paddingTop: '0.3rem',
        fontFamily: 'Segoe UI semibold',
        color: '#1D1E18',
    },
    button: {
        textTransform: 'none',
        backgroundColor: '#316C44',
        fontSize: '1rem',
        borderRadius: 28,
        width: '8rem',
        color: '#DEFEF5',
        fontFamily: 'Segoe UI Semibold',
        float: 'right',
    },
};

export default modalStyles;
