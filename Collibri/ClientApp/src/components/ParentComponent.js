import React, {useEffect} from 'react';
import SectionsContainer from "./SectionsContainer";
import {Button} from "@mui/material";
import {getSections} from "../api/SectionApi";
import {useParams} from "react-router-dom";

const ParentComponent = (props) => {
    
    const {roomId} = useParams()
    useEffect(() => {
        getSections(props.setSections, roomId);
    }, []);


    if (props.sections.length > 0) {

        return (
            <>
                <SectionsContainer sections={props.sections} setSections={props.setSections}
                                   setSectionId={props.setSectionId}/>
            </>
        )

    }
    return (<>
            No sections present
        </>
    )

};
export default ParentComponent;


