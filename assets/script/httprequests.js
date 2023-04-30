const API_URL = 'https://jsonplaceholder.typicode.com/users';

// GET ALL Category
export const getAllPosts = async () => {
    let globalData;
    await fetch(`${baseURL}/posts`)
        .then(res => res.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
}


// GET POSTS BY ID
export const getPostsById = async (id) => {
    let globalData;
    await fetch(`${baseURL}/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
}

// DELETE POSTS BY ID
export const deletePostsById = async (id) => {
    await fetch(`${baseURL}/posts/${id}`, {
        method: `DELETE`,
    })
};

// POST 
export const postPosts = async (post) => {
    let globalData;
    await fetch(`${baseURL}/posts/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => {
            globalData = data;
        })
    return globalData;
}

// PUT POSTS BY ID
export const pustPostsById = async (id, post) => {
    await fetch(`${baseURL}/posts/${id}`, {
        method: 'PuT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
}