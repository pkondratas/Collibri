import React, {useState} from 'react';
import TableDisplay from "./TableDisplay";
import {Button} from "@mui/material";

const ParentComponent = (props) => {

   
    

    
     if (props.sections.length > 0) {
        return (
          <>
            <TableDisplay sections={props.sections} setSections={props.setSections} setSectionId={props.setSectionId} />
          </>
        )

    }
        return (<>
                No sections present click to add sections
            </>
        )

};
export default ParentComponent;


