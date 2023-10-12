import React, { useState, useRef } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/post-modal.css'

const UpdatePostModal = (props) => {
  const titleFieldRef = useRef(null)
  const [fieldEmpty, setFieldEmpty] = useState(false)
  const [identicalTitle, setIdenticalTitle] = useState(false)
  
  const handleClose = () => props.setShowModal(false)

  const handleChanges = () => {
    if (titleFieldRef.current.value === '') {
      setFieldEmpty(true)
      setIdenticalTitle(false)
    } else if (titleFieldRef.current.value === props.title) {
      setIdenticalTitle(true)
      setFieldEmpty(false)
    } else if(titleFieldRef.current.value !== '' && titleFieldRef.current.value !== props.title) {
      setFieldEmpty(false)
      setIdenticalTitle(false)
      props.updatePostContent("title", titleFieldRef.current.value)
      handleClose()
    }
    
    titleFieldRef.current.value = ''
  }
  
  return (
    <>
      <Modal show={props.showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Update title of "{props.title}"</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>New title: <input ref={titleFieldRef} className="post-modal" /></p>
          {fieldEmpty ? <label >Field must not be empty!</label> : <></> }
          {identicalTitle ? <label>Provided title should differ from the previous one.</label>: <></> }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            <i className="bi bi-x-lg">  Discard</i>
          </Button>
          <Button variant="secondary" onClick={handleChanges}>
            <i className="bi bi-check-lg">  Save changes</i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdatePostModal
