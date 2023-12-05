import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Card,
    CardActions, CardContent,
    CardMedia,
    CircularProgress,
    IconButton, Typography,
} from "@mui/material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DeleteIcon from '@mui/icons-material/Delete';
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
                {imageURL === ''
                    ? <CircularProgress />
                    : <Box>
                        <Box sx={FileCardStyles.imageBox}>
                            <CardMedia component="img" alt={props.name} sx={FileCardStyles.media} image={imageURL} />
                        </Box>
                        <CardContent sx={FileCardStyles.content}>
                            <Typography sx={FileCardStyles.name}>{props.name}</Typography>
                            <Box sx={FileCardStyles.buttons}>
                                <IconButton>
                                    <FileDownloadIcon />
                                </IconButton>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Box>}
            </Card>
        </>
    );
    
}

export default ImageCard