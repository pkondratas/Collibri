import React, {useState} from 'react';
import {Box, Card, CardContent, Fade, IconButton, Tooltip, Typography} from "@mui/material";
import {NoteCardStyles} from "../styles/NoteCardStyles";
import {
  ThumbUp,
  ThumbUpAltOutlined,
  ThumbDown,
  ThumbDownAltOutlined,
  Edit,
  Delete, CloseOutlined, MoreVertOutlined, FileDownloadOutlined
} from "@mui/icons-material";

const NoteCard = (props) => {
  const [moreButton, setMoreButton] = useState(false);
  
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
                <IconButton>
                  <Delete />
                </IconButton>
                <IconButton>
                  <CloseOutlined onClick={() => setMoreButton(false)} />
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
        {moreButton ? (
          <></>
        ) : (
          <>
            <IconButton size='small'>
              <ThumbUpAltOutlined fontSize='small' />
            </IconButton>
            <IconButton size='medium'>
              <ThumbDownAltOutlined fontSize='small' />
            </IconButton>
          </>
        )
        }
      </CardContent>
    </Card>
  );
}

export default NoteCard;