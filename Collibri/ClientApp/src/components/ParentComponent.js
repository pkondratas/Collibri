import React from 'react';
import SectionsContainer from "./SectionsContainer";
import Api from "../api/Api";
import {Button} from "@mui/material";

const ParentComponent = (props) => {

    const {sections, handleDelete, handleUpdate, handlePost} = Api();

    if (sections.length > 0) {
        return (
          <>
            <SectionsContainer sections={sections} handleDelete={handleDelete} handleUpdate={handleUpdate}
                               handlePost={handlePost} setSectionId={props.setSectionId} />
          </>
        )

    }
    return (<>
            No sections present click to
            <Button className={"addSec"} onClick={() => handlePost()}>add Section</Button>
        </>
    )

};
export default ParentComponent;


