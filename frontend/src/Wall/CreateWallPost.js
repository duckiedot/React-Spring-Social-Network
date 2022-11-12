import React from 'react';
import {useLocalState} from "../util/useLocalStorage";
import WallStyle from "./style";

const CreateWallPost = () => {

    const [jwt, setJwt] = useLocalState("", "jwt")

    function createWallPost() {
        fetch("api/wall/create", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            },
            method: "post"
        }).then((response) => {
            if (response.status === 200) return response.json();
        }).then((wallPost) => {
            window.location.href = `/createpost/${wallPost.id}`
        });
    }

    return (
        <>
            <button style={WallStyle.createPostStyle}
                    onClick={() => createWallPost()}>
                Write a new <span style={{color: WallStyle.gradientColor}}>Post</span>
            </button>
        </>
    );
};

export default CreateWallPost;
