import "./NewPost.css";

import React, {useRef} from 'react';
import {createPost} from "./CreatePost";
import {useLocalState} from "../../../util/useLocalStorage";

const NewPostComponent = ({setNewPost, newPost}) => {

    const postCreatorForm = useRef(null)
    const [jwt, setJwt] = useLocalState("", "jwt")

    const submitForm = (e) => {
        e.preventDefault();
        let data = new FormData(postCreatorForm.current);
        setNewPost(createPost(data, jwt));
    }

    return (
        <div className="post-creator">
            <h1>Tell us something <span className="post-signature">cool</span>!</h1>
            <div className="post-header-underline"/>
            <form ref={postCreatorForm} onSubmit={submitForm}>
                <div className="inputs">
                    <input className="create-input new-post-title" type="text" placeholder="Title" name="wallPostName"/>
                    <input className="create-input new-post-body" type="text" placeholder="..." name="wallPostBody"/>
                    <input className="create-input new-post-submit" type="submit" value="Publish"/>
                </div>
            </form>
        </div>
    );
};

export default NewPostComponent;
