import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useEffect} from "react";
import {fetchPosts} from "../api/PostAPI";
import {createFilterOptions} from "@mui/material";

export default function SearchBar(props) {

    const options = props.posts.map(post => ({
        label: post.title,
        value: post.id
    }));

    const filterOptions = createFilterOptions({
        matchFrom: 'any',
        limit: 10,
    });

    useEffect(() => {
        fetchPosts(props.sectionId, props.setPosts);
    }, [props.sectionId]);



    return (
        <Autocomplete
            filterOptions={filterOptions}
            disablePortal
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => option.label}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Enter post title" />}
            noOptionsText={"There are no posts"}
        />
    );
}