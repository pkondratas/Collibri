import {Avatar, Box, Button, styled, Typography} from "@mui/material";
import {UserInfoStyles} from "../../styles/UserInfoStyles";


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
                <Typography  sx={UserInfoStyles.nameBox}>{props.username}</Typography>
            
        </Box>
    );
}
