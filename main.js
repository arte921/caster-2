const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;

const player = new Player(
    new Vector(4, 4)
);

player.render();


let t0 = performance.now();
function drawframe() {
    let dt = performance.now() - t0;
    t0 = performance.now();
    player.render();

    let fps = Math.round(1 / (dt / 1000));
    document.getElementById("title").innerHTML = fps + " fps";

    window.requestAnimationFrame(drawframe);
}

function mousemoved(e) {
    player.bearing += (Math.PI * e.movementX) / width;
}

document.onkeypress = function (e) {
    const wsmod = new Point(
        Math.cos(player.bearing) * player.speed,
        Math.sin(player.bearing) * player.speed
    );

    const admod = new Point(
        Math.cos(player.bearing + Math.PI / 2) * player.speed,
        Math.sin(player.bearing + Math.PI / 2) * player.speed
    );
    
    console.log(e.key);

    switch (e.key) {
        case "w":
            player.move(wsmod, true);
            break;
        case "s":
            player.move(wsmod.timesnumber(-1), true);
            break;
        case "d":
            player.move(admod, true);
            break;
        case "a":
            player.move(admod.timesnumber(-1), true);
            break;
    }
};

canvas.requestPointerLock =
    canvas.requestPointerLock || canvas.mozRequestPointerLock;
document.exitPointerLock =
    document.exitPointerLock || document.mozExitPointerLock;

canvas.onclick = () => {
    canvas.requestPointerLock();
};

document.addEventListener("pointerlockchange", lockChangeAlert, false);
document.addEventListener("mozpointerlockchange", lockChangeAlert, false);

function lockChangeAlert() {
    if (
        document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas
    ) {
        document.addEventListener("mousemove", mousemoved, false);
    } else {
        document.removeEventListener("mousemove", mousemoved, false);
    }
}

window.requestAnimationFrame(drawframe);
