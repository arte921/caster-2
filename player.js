class Player{
    constructor(pos, bearing = rad(45), fov = rad(90)) {
        //bearing and fov in radians
        this.pos = pos;
        this.bearing = bearing;
        this.fov = fov;
        this.speed = 1;
        this.shieldwidth = 2 / Math.tan(0.5 * (Math.PI - fov));
    }

    render() {
        clear();
        
        let shield = new Shield(this);

        for(let i=0; i < width; i++) {
            let ray = new Ray(
                this.pos,
                shield.rayintersect(i / width)
            );

            let color = false;
            
            let a = 0;
            for(; a < 100 && !color; a++) {
                ray.move(0.1)
                let rounded = ray.pos2.rounded();
                color = map[rounded.x][rounded.y];
            }

            if (color) {
                this.line(i, a * 0.1);
                //console.log(a * 0.1);
            }

        }

    }

    line(x, dist) {
        let wallheight = Math.pow(dist, -1) * 1000;
        console.log(dist);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(x, height / 2 - wallheight / 2, 1, wallheight);
    }
}