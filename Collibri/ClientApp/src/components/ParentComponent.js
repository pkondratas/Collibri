import React, {} from 'react';
import TableDisplay from "./TableDisplay";


import {Button} from "@mui/material";
import Api from "../apis/Api";

const ParentCombonent = () => {

    const {sections, handleDelete, handleUpdate, handlePost} = Api();

    if (sections.length > 0) {
        return (<>
            <TableDisplay sections={sections} handleDelete={handleDelete} handleUpdate={handleUpdate}
                          handlePost={handlePost}/>
        </>)

    }
    return (<>
            No sections present click to
            <Button className={"addSec"} onClick={() => handlePost()}>add Section</Button>
        </>
    )

};
export default ParentCombonent;


