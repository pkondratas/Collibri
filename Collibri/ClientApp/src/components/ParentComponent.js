import React, {useState} from 'react';
import TableDisplay from "./TableDisplay";
import Api from "../api/Api";
import {Button} from "@mui/material";

const ParentComponent = (props) => {

   
    // const {sections, handleDelete, handleUpdate, handlePost} = Api();

    
    // if (props.sections.length > 0) {
        return (
          <>
            <TableDisplay sections={props.sections} setSections={props.setSections} setSectionId={props.setSectionId} />
          </>
        )

    // }
        // return (<>
        //         No sections present click to
        //         {/*<Button className={"addSec"} onClick={() => handlePost()}>add Section</Button>*/}
        //     </>
        // )

};
export default ParentComponent;


