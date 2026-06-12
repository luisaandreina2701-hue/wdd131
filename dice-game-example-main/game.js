document.getElementById("rollButton").addEventListener("click", event => {

    //get images
    const images = document.querySelectorAll("#gameboard img")

    images.forEach(image => {
        if(isDieUnlock(image)){
            image.src = "assets/die_rolling.gif"
        }
    });

    setTimeout(() => {
        images.forEach(image => {
             if(isDieUnlock(image)){
            image.src = "assets/die_rolling.gif"
        }
            image.src = "assets/white_dice_" + (Math.floor (Math.random() * 6) + 1) + ".gif";
        });

    }, 2000);

});


function isDieUnlock(dieImage) {
    const checkboxes = document.querySelectorAll("#gameboard input");

    const unchecked =  Array.from(checkboxes)
                            .filter(checkbox => !checkbox.checked);

    return unchecked.find(unchecked => unchecked.className === dieImage.className)
}