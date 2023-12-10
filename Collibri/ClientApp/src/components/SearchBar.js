import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from "react";
import { fetchPosts } from "../api/PostAPI";
import { createFilterOptions } from "@mui/material";
import PostModal from "./Modals/PostModal";

export default function SearchBar(props) {
    const [selectedPost, setSelectedPost] = useState(null);

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

    const handlePostSelection = (event, value) => {
        if (value) {
            const selectedPost = props.posts.find(post => post.id === value.value);
            setSelectedPost(selectedPost);
        }
    };

    return (
        <>
            <Autocomplete
                filterOptions={filterOptions}
                disablePortal
                id="combo-box-demo"
                options={options}
                getOptionLabel={(option) => option.label}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Enter post title" variant="filled" />}
                noOptionsText={"There are no posts"}
                onChange={handlePostSelection} 
            />
            {selectedPost && (
                <PostModal
                    post={selectedPost}
                    {...selectedPost} 
                    postModal={true}
                    setPostModal={setSelectedPost}
                />
            )}
        </>
    );
}
