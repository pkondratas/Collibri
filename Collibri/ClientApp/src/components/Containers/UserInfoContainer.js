import {Avatar, Box, styled, Typography} from "@mui/material";
import {UserInfoStyles} from "../../styles/UserInfoStyles";
import {useSelector} from "react-redux";


export const UserInfoContainer = () => {
    const userInformation = useSelector((state) => state.user);
  
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
                <Typography sx={UserInfoStyles.nameBox}>{userInformation.username}</Typography>
        </Box>
    );
}
