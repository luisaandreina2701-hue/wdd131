document.getElementById("rollButton").addEventListener("click", event => {

    const images = document.querySelectorAll("#gameboard img");

    images.forEach(image => {
        if (isDieUnlock(image)) {
            image.src = "assets/die_rolling.gif";
        }
    });

    setTimeout(() => {
        images.forEach(image => {
            if (isDieUnlock(image)) {
                image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif";
            }
        });
    }, 2000);

});

function isDieUnlock(dieImage) {
    const checkboxes = document.querySelectorAll("#gameboard input");

    return Array.from(checkboxes)
        .some(checkbox => !checkbox.checked && checkbox.className === dieImage.className);
}