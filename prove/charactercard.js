const character = {
    name: "Swamp Beast Diplomat",
    class: "Monster",
    level: 1,
    health: 100,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",

    attacked() {
        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died!`);
        }

        displayCharacter();
    },

    levelUp() {
        this.level++;
        displayCharacter();
    }
};

function displayCharacter() {
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterClass").textContent = character.class;
    document.getElementById("characterLevel").textContent = character.level;
    document.getElementById("characterHealth").textContent = character.health;
    document.getElementById("characterImage").src = character.image;
}

document.getElementById("attackBtn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("levelBtn").addEventListener("click", () => {
    character.levelUp();
});

displayCharacter();