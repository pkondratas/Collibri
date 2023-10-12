import React, { useState } from "react";
import { createRoom } from "./RoomAPI";
import Modal from "react-modal";
import "./LandingPageModal.css";

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const CreateRoom = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    
    function handleCreateRoom() {
        if(name === null || name === '') {
            return;
        }
        
        closeModal();
        createRoom(name);
        setName(null);
    }

    return (
        <div>
            <button className={"btn buttons"} onClick={openModal}>Create Room</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyle}>
                <h1>Create room</h1>
                <label className={"message"}>Enter room name:</label>
                <input 
                    value={name} 
                    onChange={e => setName(e.target.value)} />
                <hr />
                <button onClick={handleCreateRoom}>Confirm</button>
                <button onClick={closeModal}>Cancel</button>
                <div></div>
            </Modal>
        </div>
    );
}