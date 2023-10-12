import React, { useEffect, useState } from "react"
import "../styles/post.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import UpdatePostModal from "./UpdatePostModal"
import axios from 'axios'

const Post = (props) => {
  
  const initialNote = {
    name: "",
    text: "",
    author: "",
    sectionId: 0,
    roomId: 0,
    postId: "",
    id: 0,
    creationDate: new Date(),
    lastUpdatedDate: new Date(),
  }
  
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)
  const [note, setNote] = useState(initialNote)
  const [post, setPost] = useState(props.post)
  const [showModal, setShowModal] = useState(false)
  
  const fetchNote = () => {
    axios.get(`/v1/notes/${props.noteId}`)
      .then(response => setNote(response.data))
  }
  
  const handleDelete = (postId) => {
    props.setPosts((prevPosts) => prevPosts.filter((x) => x.postId !== postId))
    axios.delete(`/v1/posts?postId=${postId}`)
      .then()
  }
  
  const updatePost = (postToUpdate) => {
    axios.put(`/v1/posts?postId=${props.postId}`, postToUpdate)
      .then()
  }
  
  useEffect(() => {
    fetchNote()
  }, [])
  
  useEffect(() => {
    updatePost(post)
  }, [post.likeCount, post.dislikeCount, post.title])

  const updatePostContent = (propertyToUpdate, value) => {
    setPost((prevPost) => ({
      ...prevPost,
      [propertyToUpdate]: value
    }))
  }
  
  const handleLike = () => {
    if(disliked) {
      setDisliked(!disliked)
      updatePostContent("dislikeCount", post.dislikeCount - 1)
    }
    
    if(!liked) {
      updatePostContent("likeCount", post.likeCount + 1)
    } else {
      updatePostContent("likeCount", post.likeCount - 1)
    }
    setLiked(!liked)
  }

  const handleDislike = () => {
    if(liked) {
      setLiked(!liked)
      updatePostContent("likeCount", post.likeCount - 1)
    }

    if(!disliked) {
      updatePostContent("dislikeCount", post.dislikeCount + 1)
    } else {
      updatePostContent("dislikeCount", post.dislikeCount - 1)
    }
    setDisliked(!disliked)
  }
  
  return(
    <>
      <div className="card post">
        <div className="card-body">
          <div className="content-placement">
            <div>
              <h5 className="post-title">{props.title}</h5>
              <div className="card-text note">
                {note.text}
              </div>
            </div>
            <div>
              <button className="buttons delete-button" onClick={() => handleDelete(props.postId)}>
                <i className="bi bi-trash3 delete-icon"></i>
              </button>
              <button className="buttons edit-button" onClick={() => {setShowModal(true)}}>
                <i className="bi bi-pen edit-icon"></i>
              </button>
            </div>
          </div>
          <p>
            <button className="reaction-buttons" onClick={handleLike}>
              {post.likeCount} {liked ? <i className="bi bi-hand-thumbs-up-fill"></i> : <i className="bi bi-hand-thumbs-up "></i>}
            </button>
            <button className="reaction-buttons" onClick={handleDislike}>
              {post.dislikeCount} {disliked ? <i className="bi bi-hand-thumbs-down-fill"></i> : <i className="bi bi-hand-thumbs-down"></i>}
            </button>
          </p>
        </div>
      </div>
      <div>
        <UpdatePostModal post={post} {...props.post} showModal={showModal} setShowModal={setShowModal} updatePost={updatePost} updatePostContent={updatePostContent} />
      </div>
    </>
  )
}

export default Post