import React from 'react';
import "./Post.css";

const PostComponent = ({wallPostData}) => {

    if (!wallPostData.wallPostBody || !wallPostData.wallPostName) {
        return;
    }

    const date = new Date(Date.parse(wallPostData.createdAt));
    const postCreatedAt = {
        time: `${date.getHours()}:${date.getMinutes()}`,
        date: `${date.getDate()}/${date.getMonth()}`
    }

    return (
        <div className="post">
            <div className="post-header">
                <div className="post-id">
                    <div className="post-title">{wallPostData.wallPostName}</div>
                    <div className="post-author">
                        by <span className="post-signature">{wallPostData.user.username}</span>
                    </div>
                </div>
                <div className="post-time">
                    <div>{postCreatedAt.time}</div>
                    <div>{postCreatedAt.date}</div>
                </div>
            </div>
            <div className="post-header-underline"/>
            <div className="post-body">{wallPostData.wallPostBody}</div>
        </div>
    );
};

export default PostComponent;
