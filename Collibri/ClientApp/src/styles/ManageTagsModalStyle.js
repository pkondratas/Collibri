export const ManageTagsModalStyle = {
    modalWindow: {
        backgroundColor: '#eee',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
        width: '35%',
        height: '50%',
        boxShadow: 24,
        p: 4,
        display: 'flex'
    },
    
    controlBox: {
        //border: '2px solid #000',
        position: 'fixed',
        top: '0%',
        left: '0%',
        width: '70%',
        height: '100%',
    },
    
    listBox: {
        borderLeft: '2px solid #000',
        position: 'fixed',
        top: '0%',
        left: '70%',
        width: '30%',
        height: '100%',
    },
    
    tagList: {
        height: '99.6%',
        overflowY: 'auto',
        
    }
}