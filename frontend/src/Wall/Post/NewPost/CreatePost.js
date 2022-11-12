function createPost(postData, jwt) {
    fetch("api/wall/create", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`
        },
        method: "POST",
        body: postData
    }).then((response) => {
        if (response.status === 200) {}
    })
}

export {createPost}