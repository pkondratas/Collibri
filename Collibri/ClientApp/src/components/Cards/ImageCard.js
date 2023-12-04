import React, {useEffect, useState} from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {getFile} from "../../api/FileAPI";
import {FileCardStyles} from "../../styles/FileCardStyles"

const ImageCard = (props) => {
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const blobData = await getFile(props.id);
            try {
                const objectURL = URL.createObjectURL(blobData);
                setImageURL(objectURL);
            } catch (error) {
                console.error("Error fetching file data:", error.message);
            }
        };

        fetchData();
    }, []);
    
    return(
        <>
            <Card sx={FileCardStyles.card}>
                <CardMedia component="img" alt={props.name} sx={FileCardStyles.media} image={imageURL} />
                {/*<CardContent>*/}
                {/*    <Typography>*/}
                {/*        {props.name}*/}
                {/*    </Typography>*/}
                {/*</CardContent>*/}
            </Card>
        </>
    );
    
}

export default ImageCard