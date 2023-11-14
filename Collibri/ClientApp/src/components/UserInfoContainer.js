import {Avatar, Box, styled, Typography} from "@mui/material";
import {UserInfoStyles} from "../styles/UserInfoStyles";
import Badge from '@mui/material/Badge';

export const UserInfoContainer = (props) => {
    
    return(
        <Box sx={UserInfoStyles.mainBox}>
            <Box sx={UserInfoStyles.iconBox}>
                <UserInfoStyles.StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar>TBD</Avatar>
                </UserInfoStyles.StyledBadge>
            </Box>
            <Box sx={UserInfoStyles.nameBox}  >
                <Typography>{props.username}</Typography>
            </Box>
        </Box>
    );
}