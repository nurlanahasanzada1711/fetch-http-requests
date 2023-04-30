const currentCardDetails = JSON.parse(localStorage.getItem("currentCardDetails"))

for (let key in currentCardDetails) {
    createInfo(currentCardDetails[key])
}

function createInfo(info) {
    let infoName = document.querySelector(".userq")
    infoName.innerText = info;

    let infoUserName = document.querySelector(".user2")
    infoUserName.innerText = info;

    let infoEmail = document.querySelector(".user3")
    infoEmail.innerText = info;

    let infoAddress = document.querySelector(".user4")
    infoAddress.innerText = info;

    let infoPhone = document.querySelector(".user5")
    infoPhone.innerText = info;

    let submit = document.querySelector(".user5")
    submit.addEventListener("submit", function () {

    })






}