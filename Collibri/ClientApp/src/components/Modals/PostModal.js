import {
  Box,
  Button, Chip,
  IconButton,
  List,
  ListItem,
  Modal,
  ToggleButton, ToggleButtonGroup,
  Typography
} from "@mui/material";
import {
  Close,
  ThumbUp,
  ThumbUpOffAltOutlined,
  ThumbDown,
  ThumbDownOffAltOutlined,
  Delete,
  Edit,
  AddBox
} from '@mui/icons-material';
import {useEffect, useState} from "react";
import {createNote, fetchNotes} from "../../api/NoteAPI";
import NoteCard from "../Cards/NoteCard";
import DocumentCard from "../Cards/DocumentCard";
import {PostModalStyles} from "../../styles/PostModalStyles";
import {createDocument, fetchDocuments} from "../../api/DocumentAPI";
import {fetchTags} from "../../api/TagAPI";


const SELECTION = ['notes', 'documents', 'files']

const PostModal = (props) => {
  const [notes, setNotes] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [tags, setTags] = useState([])
  const [files, setFiles] = useState([]);
  const [list, setList] = useState([]);
  const [selection, setSelection] = useState(SELECTION[0]);
  
  const handleClose = () => {
    props.setPostModal(false);
    setSelection(SELECTION[0]);
  }
  
  useEffect(() => {
    fetchNotes(props.id, setNotes);
    fetchDocuments(props.id, setDocuments);
    fetchTags(props.id, setTags);
    setList(notes);
  }, []);
  
  const formatDateTime = (date) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString(undefined, options);
  }

  const handleValueChange = (event, newValue) => {
    if(newValue != null) {
      setSelection(newValue);
    }
  }
  
  const addTestingData = () => {
    createNote(JSON.stringify({
      Name: Math.random().toString(),
      Text: "Testing text",
      PostId: props.id
    }));

    createDocument(JSON.stringify({
      Title: Math.random().toString(),
      Text: "Testing text"
    }), props.id.toString())
  }
  
  return (
    <Modal
      open={props.postModal}
      onClose={handleClose}
    >
      <Box sx={PostModalStyles.modalStyle}>
        <Box sx={PostModalStyles.info}>
          <Typography sx={PostModalStyles.title} variant="h2">
            {props.title}
          </Typography>
          <Box sx={PostModalStyles.descriptionBox}>
            <Typography>
              Description:
            </Typography>
            <Typography sx={PostModalStyles.description} variant="body1">
              {props.description}
            </Typography>
            <Box sx={PostModalStyles.userAndDateBox}>
              <Typography variant="body1">By: </Typography>
              <Typography variant="body1">{formatDateTime(new Date(props.lastUpdatedDate))}</Typography>
            </Box>
          </Box>
          <Box>
            <Button sx={PostModalStyles.closeButton} onClick={handleClose}>
              <Close />
            </Button>
          </Box>
        </Box>
        <Box sx={PostModalStyles.optionButtonBox}>
          <ToggleButtonGroup
            exclusive
            value={selection}
            onChange={handleValueChange}
          >
            <ToggleButton value="notes" sx={PostModalStyles.optionButtons} >Notes</ToggleButton>
            <ToggleButton value="documents" sx={PostModalStyles.optionButtons} >Documents</ToggleButton>
            <ToggleButton value="files" sx={PostModalStyles.optionButtons} >Files</ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={PostModalStyles.contentBoxContainer}>
          <Box sx={PostModalStyles.contentBox}>
            <IconButton sx={PostModalStyles.addButton} onClick={addTestingData}>
              <AddBox sx={PostModalStyles.addIcon}/>
            </IconButton>
            {selection === 'notes' ? (
              notes.length !== 0 ? (
                <List sx={PostModalStyles.list}>
                  {notes.map((note) => (
                    <ListItem>
                      <NoteCard {...note} setNotes={setNotes}/>
                    </ListItem>
                  ))}
                </List> 
              ) : (
                <Typography sx={PostModalStyles.emptyListMessage}>"Nula"(zero) notes so far. Be the first one!</Typography>
              )
            ) : selection === 'documents' ? (
              documents.length !== 0 ? (
                <List sx={PostModalStyles.list}>
                  {documents.map((doc) => (
                    <ListItem>
                      <DocumentCard {...doc} documents={documents} setDocuments={setDocuments} />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography sx={PostModalStyles.emptyListMessage}>"무"(zero) documents so far. Be the first one!</Typography>
              )
            ) : 
              <Typography>files</Typography>
            }
          </Box>
        </Box>
        <Box sx={PostModalStyles.buttonBox}>
          <Box>
            <Button onClick={props.handleLike}>
              {props.likeCount} {props.liked ? <ThumbUp sx={PostModalStyles.reactionButton} /> : <ThumbUpOffAltOutlined sx={PostModalStyles.reactionButton} />}
            </Button>
            <Button onClick={props.handleDislike}>
              {props.dislikeCount} {props.disliked ? <ThumbDown sx={PostModalStyles.reactionButton} /> : <ThumbDownOffAltOutlined sx={PostModalStyles.reactionButton} />}
            </Button>
          </Box>
          <Box sx={PostModalStyles.tagBox}>
            <List sx={PostModalStyles.tagList}>
              {tags.map((tag) => (
                  <ListItem>
                    <Chip sx={PostModalStyles.tagChip} label={tag.name} />
                  </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <IconButton sx={PostModalStyles.editDeleteButtons}>
              <Edit />
            </IconButton>
            <IconButton sx={PostModalStyles.editDeleteButtons} onClick={() => {
              props.setDeleteModal(true)
            }}>
              <Delete />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default PostModal;