export const LoginContainerStyles = {
    container: {
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
        backgroundColor: '#ababab',
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '20px',
        zIndex: 1,
    },
    loadingContainer: {
        position: 'absolute',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        minWidth: '30rem',
        minHeight: '31rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(10px)'
    },
    wrongData: {
        color: 'red',
        fontSize: '0.75rem'
    },
    formContainer: {
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        minWidth: '28rem',
        minHeight: '27rem',
        // position: 'relative',
        // zIndex: 0,
    },  
    paper: {
        padding: 20,
        minWidth: '25.5rem',
        minHeight: '24.5rem',
        marginBottom: 50,
        borderRadius: 12,
        width: '100%',
        backgroundColor: '#d3d3d3',
    },
    fieldContainer: {
        minHeight: '12rem'
    },
    typography: {
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
    },
    link: {
        textDecoration: 'none',
        color: '#757575',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#757575',
        color: '#FFFFFF',
    },
};

