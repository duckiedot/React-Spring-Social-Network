import React, {useEffect, useState} from 'react';
import {useLocalState} from "../../util/useLocalStorage";
import PostComponent from "./PostComponent";

const RenderPostsComponent = ({wallPosts}) => {

    console.log(wallPosts)

    return (
        <>
            {wallPosts ? wallPosts.map((wallPost) => <PostComponent wallPostData = {wallPost}/>) : <></>}
        </>
    );
};

export default RenderPostsComponent;
