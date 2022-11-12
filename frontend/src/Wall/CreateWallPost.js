import React from 'react';
import {useLocalState} from "../util/useLocalStorage";

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
            <button onClick={() => createWallPost()}>Write Post</button>
        </>
    );
};

export default CreateWallPost;
