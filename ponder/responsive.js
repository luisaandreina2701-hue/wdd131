let menuButton = document.getElementsByClassName("menu-btn")[0]

let nav = document.getElementsByTagName("nav")[0]

//event listener
menuButton.addEventListener("click", handleMenuButtonClick)

function handleMenuButtonClick() {

    //toggle menu
    nav.classList.toggle("show")

    //change button animation
    menuButton.classList.toggle("change")
}