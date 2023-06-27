import React, {useEffect, useState} from 'react';
import RenderPostsComponent from "./Post/RenderPostsComponent";
import "./Wall.css";
import NewPostComponent from "./Post/NewPost/NewPostComponent";
import {useLocalState} from "../util/useLocalStorage";

const Wall = () => {

    const [jwt, setJwt] = useLocalState("", "jwt")
    const [wallPosts, setWallPosts] = useState(null);
    const [newPosts, setNewPosts] = useState(null)

    useEffect(() => {
        fetch("api/wall/load/all", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            }
        }).then((response) => {
            if (response.status === 200) return response.json();
        }).then((wallPostsData) => {
            setWallPosts(wallPostsData)
        })
    }, [jwt, newPosts]);


    return (
        <div className="wall">
            <div className="wall-posts">
                <NewPostComponent setNewPost={setNewPosts} newPost={newPosts}/>
                <RenderPostsComponent wallPosts={wallPosts}/>
            </div>
        </div>
    );
};

export default Wall;