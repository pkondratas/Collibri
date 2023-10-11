
import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import TableDisplay from "./TableDisplay";
import Api from "./Api";
import modalStyles from "./ModalStyle";
import ReactModal from 'react-modal';

const ListComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const {sections, handleDelete,handleUpdate} = Api();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log('Submitted value:', inputValue);
        closeModal();
    };
    
    
    if (sections.length > 0) {
        return (<>
            <TableDisplay sections={sections} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            <button onClick={openModal}>Open Modal</button>
            <ReactModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                ariaHideApp={false} // Set this prop to prevent a11y issues
            >

                <h2>Modal Title</h2>
                <p>This is some text inside the modal.</p>

                <div>
                    <label htmlFor="inputField">Text Field:</label>
                    <input
                        type="text"
                        id="inputField"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>

                <button onClick={handleSubmit}>Submit</button>
                <button onClick={closeModal}>Close Modal</button>
            </ReactModal>    
        </>)
        
    }
    return "No sections Present fam";
    
};

export default ListComponent;


