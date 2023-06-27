import React from 'react';
import PostComponent from "./PostComponent";

const RenderPostsComponent = ({wallPosts}) => {

    return (
        <>
            {wallPosts ? wallPosts.map((wallPost) => <PostComponent wallPostData = {wallPost}/>) : <></>}
        </>
    );
};

export default RenderPostsComponent;
