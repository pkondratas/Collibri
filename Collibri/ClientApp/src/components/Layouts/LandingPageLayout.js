import React, {useState} from "react";
import {
    Box,
    Button,
    Grid, IconButton,
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
import {Info} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
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

                <Box sx={{fontSize: '7.8rem'}}>
                    Collibri
                    <TextOnlyTooltip placement="right-end" title="More About Us"
                                     sx={{fontSize: '1.1rem', backgroundColor: 'white'}}>
                        <IconButton>
                            <InfoIcon onClick={() => navigate("/about")} color="success" />
                        </IconButton>
                    </TextOnlyTooltip>


                </Box>
                

            </Grid>

            {/*List and buttons*/}
            <Grid item xs={6}
                  container
                  direction="column"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{paddingTop: "2em", paddingBottom: "2em"}}>

                {/*List*/}
                <Grid item>
                    <RoomContainer rooms={rooms} setRooms={setRooms}/>
                </Grid>

                {/*Button grid*/}
                <Grid item
                      container
                      direction="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                      sx={{mt: '45rem'}}>
                    <Grid item>
                        <CreateRoom setRooms={setRooms}/>
                    </Grid>
                    <Grid item>
                        <JoinRoom/>
                    </Grid>

                </Grid>
                <Grid item>
                    <AboutUsButton/>
                </Grid>
               

            </Grid>
        </Grid>
);
}