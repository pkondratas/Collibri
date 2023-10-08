import React, {useEffect, useState} from 'react';

function BasicList(props) {
    


        return (
            <li>
                Name: {props.name}, Room ID: {props.roomId}, ID: {props.Id}
                <button onClick={() => props.onDelete(props.Id)}>Delete</button>
                <button onClick={() => props.onUpdate(props.Id)}>Update</button>
            </li>
        );


    
}
export  default  BasicList;