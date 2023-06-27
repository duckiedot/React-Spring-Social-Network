function createPost(postData, jwt) {

    let requestResponse;

        let aa = fetch("api/wall/create", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
        method: "post",
        body: JSON.stringify(Object.fromEntries(postData))
    }).then((response) => Promise.all([response.json(), response.headers]))
        .then(([body, headers]) => {
            return headers
        }
    )
    console.log(aa)
    return requestResponse;
}

export {createPost}