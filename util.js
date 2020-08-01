const width = 800;
const height = 800;

const rad = (deg) => deg / 180 * Math.PI;

function clear(color = "#000000") {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
}
