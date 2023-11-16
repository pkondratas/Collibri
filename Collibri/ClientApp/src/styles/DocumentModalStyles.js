export const DocumentModalStyles = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '47rem',
        height: '55rem',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
    },
    
    title: {
        minHeight: '4rem',
        maxHeight: '4rem',
        overflow: 'hidden',
        textAlign: 'center'
    },
    
    body: {
        minHeight: '46rem',
        maxHeight: '46rem',
        wordBreak: 'break-word',
        overflowX: 'hidden',
        overflowY: 'auto'
    }
};