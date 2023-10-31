import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import {
  ThumbUp,
  ThumbUpAltOutlined,
  ThumbDown,
  ThumbDownOffAltOutlined,
  DeleteOutline,
  EditOutlined
} from '@mui/icons-material';
import {
  postCardStyle,
  postContentBoxStyle,
  postEditingBox,
  postEditingButtons,
  postNoteStyle, postReactionButtons
} from '../styles/PostStyle';
import { deletePost, updatePost } from '../api/PostAPI';
import { fetchNote } from '../api/NoteAPI';
import UpdatePostModal from './UpdatePostModal';
import DeleteModal from "./DeleteModal";
import '../styles/post.css';

const Post = (props) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [note, setNote] = useState('');
  const [post, setPost] = useState(props.post);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
    
  const handleDelete = (postId) => {
    deletePost(postId)
      .then(deletedData => {
        props.setPosts((prevPosts) => prevPosts.filter((x) => x.postId !== deletedData.postId));
      })
  }

  const updatePostContent = (propertyToUpdate, value) => {
    const updatedPost = {
      ...post,
      [propertyToUpdate]: value
    };
    updatePost(post.postId, updatedPost);
    setPost(updatedPost);
  }
  
  const updateReactionCounts = (likes, dislikes) => {
    const updatedPost = {
      ...post,
      "likeCount": likes,
      "dislikeCount": dislikes
    };
    updatePost(post.postId, updatedPost);
    setPost(updatedPost);
  }

  const handleLike = () => {
    let likes = post.likeCount;
    let dislikes = post.dislikeCount;
    
    if(disliked) {
      dislikes = post.dislikeCount - 1;
      setDisliked(!disliked);
    }
    
    if(!liked) {
      likes = post.likeCount + 1;
    } else {
      likes = post.likeCount - 1;
    }
    updateReactionCounts(likes, dislikes);
    setLiked(!liked);
  }

  const handleDislike = () => {
    let likes = post.likeCount;
    let dislikes = post.dislikeCount;
    
    if(liked) {
      likes = post.likeCount - 1;
      setLiked(!liked);
    }

    if(!disliked) {
      dislikes = post.dislikeCount + 1;
    } else {
      dislikes = post.dislikeCount - 1;
    }
    updateReactionCounts(likes, dislikes);
    setDisliked(!disliked);
  }
  
  //useEffect(() => {
  //  fetchNote(props.noteId, setNote);
  //}, [props.noteId]);
  
  return(
    <>
      <Card hover className="Card" sx={postCardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.title}
          </Typography>
          <Box sx={postContentBoxStyle}>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={postNoteStyle}
            >
              {props.description}
            </Typography>
            <Box sx={postEditingBox}>
              <Button sx={postEditingButtons} className="Button" onClick={() => {setDeleteModal(true)}}>
                <DeleteOutline fontSize="small" />
              </Button>
              <Button sx={postEditingButtons} className="Button" onClick={() => {setUpdateModal(true)}}>
                <EditOutlined fontSize="small" />
              </Button>
            </Box>
          </Box>
          <Typography>
            <Button onClick={handleLike}>
              {post.likeCount} {liked ? <ThumbUp fontSize="small" sx={postReactionButtons} /> : <ThumbUpAltOutlined fontSize="small" sx={postReactionButtons}/>}
            </Button>
            <Button onClick={handleDislike}>
              {post.dislikeCount} {disliked ? <ThumbDown fontSize="small" sx={postReactionButtons} /> : <ThumbDownOffAltOutlined fontSize="small" sx={postReactionButtons} />}
            </Button>
            <Typography variant="caption">
              Last edited: {post.lastUpdatedDate ? post.lastUpdatedDate.toLocaleString() : 'Loading...'}
            </Typography>
          </Typography>
          <UpdatePostModal post={post} {...props.post} updateModal={updateModal} setUpdateModal={setUpdateModal} updatePost={updatePost} updatePostContent={updatePostContent} />
          <DeleteModal postId={props.postId} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete} />
        </CardContent>
      </Card>
    </>
  )
}

export default Post;