export const buttonStyle = {
    color: '#81a989',
}


export const nameCellStyle = {
    cursor: 'pointer',
    color: '#5e7c65',
    fontWeight: '700',
}

export const SectionsContainerStyles = {
    tableBody: {
        '&:last-child td, &:last-child th': { border: 0 },
        height: '5rem',
        border: '10px',
        '&:hover': {
            background: '#e2f1ea',
            boxShadow: 3,
        },
    },
    sectionSelected: {
        background: '#ebf8f2',
        boxShadow: 3,
        height: '5rem',
    },
    emptySectionsBox: {
        marginTop: '55%',
        display: 'flex',
        height: '78.5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    noSectionsMessage: {
        color: '#81a989',
        fontWeight: '700',
        fontFamily: 'cursive',
    },
    
}