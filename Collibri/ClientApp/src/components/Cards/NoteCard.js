import React, {useState} from 'react';
import {Box, Card, CardContent, Fade, IconButton, Tooltip, Typography} from "@mui/material";

import {
  ThumbUp,
  ThumbUpAltOutlined,
  ThumbDown,
  ThumbDownAltOutlined,
  Edit,
  Delete, CloseOutlined, MoreVertOutlined, FileDownloadOutlined
} from "@mui/icons-material";
import {NoteCardStyles} from "../../styles/NoteCardStyles";
import {deleteNote} from "../../api/NoteAPI";


const NoteCard = (props) => {
  const [moreButton, setMoreButton] = useState(false);
  
  const handleDelete = () => {
    deleteNote(props.id)
      .then(r => props.setNotes((prevNotes) => prevNotes.filter(x => x.id !== r.id)))
    setMoreButton(false);
  }
  
  return (
    <Card sx={NoteCardStyles.card}>
      <CardContent>
        <Box sx={NoteCardStyles.contentBox}>
          <Box>
            <Tooltip
              TransitionComponent={Fade}
              placement="top-start"
              title={props.name}>
              <Typography sx={{...NoteCardStyles.generalText, ...NoteCardStyles.title}} variant="h6">
                {props.name}
              </Typography>
            </Tooltip>
            <Box>
              <Typography sx={{...NoteCardStyles.generalText, ...NoteCardStyles.content}} variant="body2">
                {props.text}
              </Typography>
            </Box>
          </Box>
          <Box>
            {moreButton ? (
              <>
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete()}>
                  <Delete />
                </IconButton>
                <IconButton onClick={() => setMoreButton(false)}>
                  <CloseOutlined />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={() => setMoreButton(true)}>
                  <MoreVertOutlined />
                </IconButton>
              </>
            )
            }
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default NoteCard;