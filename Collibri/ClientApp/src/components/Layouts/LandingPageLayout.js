import React, {useState} from "react";
import {
    Box,
    Button,
    Grid, Icon, IconButton,
    Link,
    styled,
    ThemeProvider,
    Tooltip,
    tooltipClasses,
    Typography,

} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import {headerStyle, headerTextTheme} from "../../styles/LandingPageStyle";
import {CreateRoom} from "../Buttons/CreateRoom";
import {JoinRoom} from "../Buttons/JoinRoom";
import {RoomContainer} from "../Containers/RoomContainer";
import '../../styles/tableList.css';
import {AboutUsButton} from "../Buttons/AboutUsButton";
import {Add, Info} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {RoomOptions} from "../Buttons/RoomOptions";
import {UserInfoContainer} from "../Containers/UserInfoContainer";

export const LandingPageLayout = () => {

    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    const TextOnlyTooltip = styled(({className, ...props}) => (
        <Tooltip {...props} componentsProps={{tooltip: {className: className}}}/>
    ))(`
    color: black;
    background-color: transparent;
`);

    return (
        <Grid container
              style={{width: "100vw", height: "100vh"}}>

            {/*Header*/}
            <Grid item xs={6} style={headerStyle}>

                <Typography sx={{fontSize: '7.8rem'}}>
                    Collibri
                </Typography>
                

            </Grid>

            {/*List and buttons*/}
            <Grid item xs={6}
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="center"
                  style={{paddingTop: "2em", paddingBottom: "2em"}}>

                <Typography variant={"h4"} sx={{paddingBottom:'2rem'}}>Your Rooms  
                    
                </Typography>
                
                
                {/*List*/}
                <Grid item >
                    <RoomContainer rooms={rooms} setRooms={setRooms}/>
                </Grid>

                <RoomOptions setRooms={setRooms} />

                {/*Button grid*/}
                <Box sx={{paddingRight:'65%', paddingTop:'20%'}}>
                    
                    <UserInfoContainer username={"Future User"}/>
                </Box>
                <Box
                    position="fixed" // or "absolute" based on your requirements
                    top={0}
                    right={0}
                    margin={2} // Optional margin to add space from the edges
                    zIndex={9999}
                >
                    
                    <TextOnlyTooltip placement="right-end" title="More About Us"
                                     sx={{fontSize: '1.1rem', backgroundColor: 'white'}}>
                        <IconButton>
                            <InfoIcon onClick={() => navigate("/about")}  fontSize="large" color="success" />
                        </IconButton>
                    </TextOnlyTooltip>
                </Box>

               

            </Grid>
        </Grid>
);
}