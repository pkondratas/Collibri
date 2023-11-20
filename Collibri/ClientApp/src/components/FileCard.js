import React from 'react';
import {Card, CardContent, Typography} from "@mui/material";

const FileCard = (props) => {
    
    return (
        <>
            <Card>
                <CardContent>
                    <Typography>
                        {props.name}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
    
}

export default FileCard;