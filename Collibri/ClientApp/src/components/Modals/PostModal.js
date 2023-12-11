import {
    Box,
    Button, Chip, Divider,
    IconButton,
    List,
    ListItem,
    Modal,
    ToggleButton, ToggleButtonGroup, Tooltip,
    Typography
} from "@mui/material";
import AddCardIcon from '@mui/icons-material/AddCard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import {useEffect, useState} from "react";
import {fetchNotes} from "../../api/NoteAPI";
import NoteCard from "../Cards/NoteCard";
import DocumentCard from "../Cards/DocumentCard";
import {PostModalStyles} from "../../styles/PostModalStyles";
import { CreateNoteModal } from "./CreateNoteModal";
import {createDocument, fetchDocuments} from "../../api/DocumentAPI";
import {fetchFiles} from "../../api/FileAPI";
import FileCard from "../Cards/FileCard";
import ImageCard from "../Cards/ImageCard";
import AddFileButton from "../Buttons/AddFileButton";
import UpdatePostModal from "./UpdatePostModal";
import {fetchTags} from "../../api/TagAPI";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const SELECTION = ['notes', 'documents', 'files']

const PostModal = (props) => {
  const [notes, setNotes] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [tags, setTags] = useState([])
  const [files, setFiles] = useState([]);
  const [list, setList] = useState([]);
  const [selection, setSelection] = useState(SELECTION[0]);
  const [createNoteModalOpen, setCreateNoteModalOpen] = useState(false);
  const [update, setUpdate] = useState(false);
    
  const handleClose = () => {
    props.setPostModal(false);
    setSelection(SELECTION[0]);
  }
  
  useEffect(() => {
    fetchNotes(props.id, setNotes);
    fetchDocuments(props.id, setDocuments);
    fetchTags(props.id, setTags);
    fetchFiles(props.id, setFiles);
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
    const handleAddNoteClick = () => {
        setCreateNoteModalOpen(true);
    };
  
    return (
        <>
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
                            <Divider textAlign="left">
                                <b>DESCRIPTION</b>
                            </Divider>
                            <Typography sx={PostModalStyles.description} variant="body1">
                                {props.description}
                            </Typography>
                            <Box sx={PostModalStyles.userAndDateBox}>
                                <Typography variant="body1"><b>By: {props.creatorUsername}</b></Typography>
                                <Typography variant="body1"><b>{formatDateTime(new Date(props.lastUpdatedDate))}</b></Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Button sx={PostModalStyles.closeButton} onClick={handleClose}>
                                <CloseIcon fontSize="large" />
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={PostModalStyles.optionButtonBox}>
                        <ToggleButtonGroup
                            exclusive
                            value={selection}
                            onChange={handleValueChange}
                        >
                            <ToggleButton disableRipple value="notes" sx={PostModalStyles.optionButtons} >Notes</ToggleButton>
                            <ToggleButton disableRipple value="documents" sx={PostModalStyles.optionButtons} >Documents</ToggleButton>
                            <ToggleButton disableRipple value="files" sx={PostModalStyles.optionButtons} >Files</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Box sx={PostModalStyles.contentBoxContainer}>
                        <Box sx={PostModalStyles.contentBox}>
                            <Box sx={PostModalStyles.addButtonBox}>
                                <Tooltip arrow placement="right" title="Add note">
                                    <IconButton sx={PostModalStyles.addButton} disableRipple onClick={handleAddNoteClick}>
                                        <AddCardIcon fontSize="large"/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip arrow placement="right" title="Add document">
                                    <IconButton sx={PostModalStyles.addButton} disableRipple>
                                        <NoteAddIcon fontSize="large"/>
                                    </IconButton>
                                </Tooltip>
                                <AddFileButton buttonStyle={PostModalStyles.addButton} postId={props.post.id} setFiles={setFiles}/>
                            </Box>
                            
                            {selection === 'notes' ? (
                                notes.length !== 0 ? (
                                    <List sx={PostModalStyles.list}>
                                        {notes.map((note) => (
                                            <ListItem>
                                                <NoteCard {...note} setNotes={setNotes} />
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
                            ) : (
                                files.length !== 0 ? (
                                    <List sx={PostModalStyles.list}>
                                        {files.map((file) => (
                                            <ListItem>
                                                {file.contentType.startsWith('image/')
                                                    ? <ImageCard {...file} files={files} setFiles={setFiles}/>
                                                    : <FileCard {...file} files={files} setFiles={setFiles} />}
                                            </ListItem>
                                        ))}
                                    </List>
                                ) : (
                                    <Typography>No files here :(</Typography>
                                )
                            )
                            }
                        </Box>
                    </Box>
                    <Box sx={PostModalStyles.buttonBox}>
                        
                        <Box sx={PostModalStyles.reactionBox}>
                            <Button disableRipple sx={PostModalStyles.likeButton} onClick={props.handleLike}>
                                {props.likeCount} {props.liked ? <ThumbUpIcon sx={PostModalStyles.likedButtonIcon} fontSize="large"/> : <ThumbUpAltOutlinedIcon sx={PostModalStyles.reactionButtonIcon} fontSize="large" />}
                            </Button>
                            <Button disableRipple sx={PostModalStyles.dislikeButton} onClick={props.handleDislike}>
                                {props.dislikeCount} {props.disliked ? <ThumbDownIcon sx={PostModalStyles.dislikedButtonIcon} fontSize="large"/> : <ThumbDownAltOutlinedIcon sx={PostModalStyles.reactionButtonIcon} fontSize="large"/>}
                            </Button>
                        </Box>
                        <Box sx={PostModalStyles.tagBox}>
                            <List sx={PostModalStyles.tagList}>
                                {tags.map((tag) => (
                                    <ListItem sx={PostModalStyles.tagListItem}>
                                        <Chip sx={PostModalStyles.tagChip} label={tag.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box>
                            <Button disableRipple sx={PostModalStyles.editButton} onClick={() => {
                              setUpdate(true);
                            }}>
                                <EditIcon fontSize="large" />
                            </Button>
                            <Button disableRipple sx={PostModalStyles.deleteButton} onClick={() => {
                                props.setDeleteModal(true)
                            }}>
                                <DeleteIcon fontSize="large" />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
            <CreateNoteModal
                showModal={createNoteModalOpen}
                setOpen={setCreateNoteModalOpen}
                postId={props.id}
                handleSuccessfulClose={() => {
                    setCreateNoteModalOpen(false);
                    fetchNotes(props.id, setNotes);
                }}
            />
        </>
    )
}

export default PostModal;