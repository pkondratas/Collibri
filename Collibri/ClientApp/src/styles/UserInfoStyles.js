import {styled} from "@mui/material";
import Badge from "@mui/material/Badge";

export const UserInfoStyles = {
    mainBox: {
        mt:'13vh',
        display:'flex',
         backgroundColor:'red',
        minHeight:'4rem',
        minWidth:'19rem'
    },
    iconBox: {
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 12,
        width:'5rem',
        paddingTop: '0.75rem',
        paddingLeft: '1.25rem',
       
    },
    nameBox:{
        bgcolor: 'background.paper',
        borderTop: '1px solid #000',
        borderRight: '1px solid #000',
        borderBottom: '1px solid #000',
        boxShadow: 12,
        minWidth: '14rem',
        paddingTop: '1.25rem',
        textAlign: 'center'
    },
    StyledBadge:  styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#FFFFFF',
            color: 'black',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }))
}
 