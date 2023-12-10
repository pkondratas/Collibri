import React, { useState } from 'react';
import {Box, Card, CardContent, Typography, Button, CardActionArea} from '@mui/material';
import {
  ThumbUp,
  ThumbUpAltOutlined,
  ThumbDown,
  ThumbDownOffAltOutlined,
  DeleteOutline,
  EditOutlined
} from '@mui/icons-material';
import {PostStyle} from '../styles/PostStyle';
import { deletePost, updatePost } from '../api/PostAPI';
import '../styles/post.css';
import UpdatePostModal from "./Modals/UpdatePostModal";
import DeleteModal from "./Modals/DeleteModal";
import PostModal from "./Modals/PostModal";


const Post = (props) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [post, setPost] = useState(props.post);
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [postModal, setPostModal] = useState(false);
    
  const handleDelete = (postId) => {
    deletePost(postId)
      .then(deletedData => {
        props.setPosts((prevPosts) => prevPosts.filter((x) => x.id !== deletedData.id));
      })
  }

  const updatePostContent = (propertyToUpdate, value) => {
    const updatedPost = {
      ...post,
      [propertyToUpdate]: value
    };
    updatePost(post.id, updatedPost);
    setPost(updatedPost);
  }
  
  const updateReactionCounts = (likes, dislikes) => {
    const updatedPost = {
      ...post,
      "likeCount": likes,
      "dislikeCount": dislikes
    };
    updatePost(post.id, updatedPost);
    setPost(updatedPost);
  }

  const handleLike = (event) => {
    event.stopPropagation();
    
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

  const handleDislike = (event) => {
    event.stopPropagation();
    
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
  function displayDate(dateString) {
    const [fullDate, time] = dateString.split('T');
    const [hour, minute, second] = time.split(':');
    return fullDate + ', ' + hour + ':' + minute;
  }
  
  return(
    <>
      <Card hover className="Card" sx={PostStyle.cardStyle}>
        <CardActionArea disableRipple onClick={() => {
          setPostModal(true);
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" sx={PostStyle.title}>
              {props.title}
            </Typography>
            <Box sx={PostStyle.contentBox}>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={PostStyle.description}
              >
                {post.description}
              </Typography>
              <Box sx={PostStyle.editingBox}>
                <Button sx={PostStyle.editingButtons} className="Button" onClick={(event) => {
                  event.stopPropagation();
                  setDeleteModal(true);
                }}>
                  <DeleteOutline fontSize="small" />
                </Button>
                <Button sx={PostStyle.editingButtons} className="Button" onClick={(event) => {
                  event.stopPropagation();
                  setUpdateModal(true);
                }}>
                  <EditOutlined fontSize="small" />
                </Button>
              </Box>
            </Box>
            <Box sx={PostStyle.buttonBox}>
              <Box>
                <Button onClick={handleLike} sx={PostStyle.buttonComponent}>
                  <Typography sx={PostStyle.likeCount}>
                    {post.likeCount}
                  </Typography>
                  {liked ? <ThumbUp fontSize="small" sx={PostStyle.reactionButtons} /> : <ThumbUpAltOutlined fontSize="small" sx={PostStyle.reactionButtons}/>}
                </Button>
                <Button onClick={handleDislike} sx={PostStyle.buttonComponent}>
                  <Typography sx={PostStyle.likeCount}>
                    {post.dislikeCount}
                  </Typography>
                  {disliked ? <ThumbDown fontSize="small" sx={PostStyle.reactionButtons} /> : <ThumbDownOffAltOutlined fontSize="small" sx={PostStyle.reactionButtons} />}
                </Button>
              </Box>
              <Typography variant="caption">
                {'User: ' + props.creatorUsername}
              </Typography>
              <Typography variant="caption" sx={PostStyle.updated}>
                {post.lastUpdatedDate ? 'Last edited: ' + displayDate(post.lastUpdatedDate.toLocaleString()) : ''}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <UpdatePostModal post={post} {...post} updateModal={updateModal} setUpdateModal={setUpdateModal} updatePost={updatePost} updatePostContent={updatePostContent} />
      <DeleteModal id={props.id} deleteModal={deleteModal} setDeleteModal={setDeleteModal} handleDelete={handleDelete} />
      <PostModal 
        post={post} 
        {...post} 
        postModal={postModal} 
        setPostModal={setPostModal} 
        liked={liked}
        disliked={disliked}
        handleLike={handleLike}
        handleDislike={handleDislike}
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
      />
    </>
  )
}

export default Post;