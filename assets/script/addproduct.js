import {
    gettAllCPosts,
    // getPostsById,
    // deletePostsById,
    // postPosts,
    // pustPostsById
} from  "./httprequests.js"




let inputName = document.querySelector(".user1")
let inputUserName = document.querySelector("user2")
let inputEmail = document.querySelector("user3")
let inputAddress = document.querySelector("user4")
let errorMessage1 = document.querySelector(".error-message-1")
let errorMessage2 = document.querySelector(".error-message-2")
let submit = document.querySelector(".user5")
const API_URL = 'https://jsonplaceholder.typicode.com/users';


const postEdit = async (edit) => {
    await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(edit)
    })
}


submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (
        inputName.value.trim() == "" &&
        inputUserName.value.trim() == "" &&
        inputEmail.value.trim() == "" &&
        inputAddress.value.trim() == "" &&
        inputPhone.value.trim() == ""
    ) {
        errorMessage1.style.display = "block";
        errorMessage2.style.display = "block"
    } else {
        const edit = {
            name: inputName.value,
            userName: inputUserName.value,
            email: inputEmail.value,
            address: inputAddress.value,
            phone: inputPhone.value,
        };

        errorMessage1.style.display = "none";
        errorMessage2.style.display = "none";

        inputName.value = "";
        inputUserName.value = "";
        inputEmail.value = "";
        inputAddress.value = "";
        inputPhone.value = "";

        postEdit(edit)
            .then(() => {
                return gettAllCPosts();
            })
            .then((data) => {
                return data;
            });
    }
})