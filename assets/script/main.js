import {
    deletePostsById,
} from "./httprequests.js"; 



const API_URL = 'https://jsonplaceholder.typicode.com/users';
let spinner = document.querySelector(".spinner");

spinner.style.display = "none";

(async function getData() {
    const row = document.querySelector(".row");

    spinner.style.display = "flex";

    try {
        const res = await fetch(API_URL)
        const data = await res.json()

        data.forEach(element => {

            spinner.style.display = "none";
            let newCard = createCard(element);
            row.append(newCard);
        });

        search.addEventListener("keyup", (e) => {
            row.innerHTML = "";
            let filteredData = data.filter((user) =>
                user.name
                .trim()
                .toLowerCase()
                .includes(e.target.value.trim().toLowerCase())
            );
            filteredData.forEach((user) => {
                let newCard = createCard(user);
                row.append(newCard);
            });
        });
    } catch (err) {
        console.log(err)
    }
})();


function createCard(user) {
    let col = document.createElement("div");
    col.classList.add("col-3");
    col.classList.add("mb-3");

    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let image = document.createElement("img");
    image.setAttribute("src", "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80");

    let name = document.createElement("h5");
    name.classList.add("card-title");
    name.innerText = `${user.name}`;

    let username = document.createElement("p");
    username.classList.add("card-list");
    username.innerText = `${user.username}`;

    let email = document.createElement("p");
    email.classList.add("card-list");
    email.innerText = `${user.email}`;

    let address = document.createElement("p");
    address.classList.add("card-list");
    address.innerText = `${user.address.city}- ${user.address.street}`;

    let phone = document.createElement("p");
    phone.classList.add("card-list");
    phone.innerText = `${user.phone}`;

    let buttonDiv = document.createElement("div")
    buttonDiv.classList.add("buttonDiv");

    let editButton = document.createElement("a");
    editButton.setAttribute("href", "home.html");
    editButton.classList.add("button");
    editButton.classList.add(".btn-primary");
    editButton.innerText = "Edit";

    editButton.addEventListener("click", function () {
        localStorage.setItem("currentCardDetails", JSON.stringify((user)));

    });

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-id", `${user.id}`);
    deleteButton.classList.add("button");
    deleteButton.classList.add("btn-primary");
    deleteButton.innerText = "Delete"

    deleteButton.addEventListener("click", (e) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );

                let id = e.target.getAttribute("data-id")
                deletePostsById(id);
                e.target.parentElement.parentElement.parentElement.parentElement.remove();

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    })

    buttonDiv.append(editButton, deleteButton)



    cardBody.append(name, username, email, address, phone, buttonDiv);
    card.append(image, cardBody);
    col.append(card);

    return col;
}