const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;

const player = new Player(
    new Vector(4, 4)
);

player.render();