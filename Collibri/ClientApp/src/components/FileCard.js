import React from 'react';
import {Box, Card, CardContent, Typography} from "@mui/material";
import {FileCardStyles} from "../styles/FileCardStyles"

const FileCard = (props) => {
    
    return (
        <>
            <Card sx={FileCardStyles.card}>
                <CardContent>
                    <Box sx={FileCardStyles.contentBox}>
                        <Typography>
                            {props.name}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
    
}

export default FileCard;