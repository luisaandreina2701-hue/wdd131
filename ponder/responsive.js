let menuButton = document.getElementsByClassName("menu-btn")[0]

console.log(menuButton)

//event listener
menuButton.addEventListener("click" , handleMenuButtonClick)

function handleMenuButtonClick(e){
    console.log(e)
    //toggle on/off the menu display

    //grab the nav from the DOM
    let nav = document.querySelector("nav")

    //toggle the.hide class on/off
    nav.classList.toggle("hide")

    //profit
}



