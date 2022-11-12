import "./NewPost.css";

import React from 'react';

const NewPostComponent = ({setNewPost, newPost}) => {

    const submitForm = (e) => {
        e.preventDefault();
        setNewPost(!newPost)
    }

    return (
        <div className="post-creator">
            <h1>Tell us something <span className="post-signature">cool</span>!</h1>
            <div className="post-header-underline"/>
            <form name="createPostForm" onSubmit={submitForm}>
                <div className="inputs">
                    <input className="create-input new-post-title" type="text" placeholder="Title"/>
                    <input className="create-input new-post-body" type="text" placeholder="..."/>
                    <input className="create-input new-post-submit" type="submit" value="Publish"/>
                </div>
            </form>
        </div>
    );
};

export default NewPostComponent;
