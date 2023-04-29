const API_URL = 'https://jsonplaceholder.typicode.com/posts';

(async function getData() {
    const row = document.querySelector(".row");

    try {
        const res = await fetch(API_URL)
        const data = await res.json()

        data.forEach(element => {
            let newCard = createCard(element);
            row.append(newCard);
        });

        // select.addEventListener("change", function () {
        //     row.innerHTML = "";

        //     if (this.value == "id") {
        //         data.sort((a, b) => a.id - b.id)
        //         data.forEach(elem => {
        //             row.append(createCard(elem))
        //         })
        //     } else if (this.value == "username") {
        //         data.sort((a, b) => a.username.localeCompare(b.username))
        //         data.forEach(elem => {
        //             row.append(createCard(elem))
        //         })
        //     } else {
        //         row.innerHTML = "adam ol"
        //     }


        // })
    } catch (err) {
        console.log(err)
    }



})();

// function myFunction() {
//     let nav = document.getElementById("page");
//     if (nav.className === "page") {
//       nav.className += " responsive";
//     } else {
//       nav.className = "page";
//     }
//   }


function createCard(user) {
    let col = document.createElement("div");
    col.classList.add("col-3");
    col.classList.add("mb-3");

    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerText = `${user.title}`;

    let body = document.createElement("p");
    body.classList.add("card-list");
    body.innerText = `${user.body}`;

    cardBody.append(title, body);
    card.append(cardBody);
    col.append(card);

    return col;
}