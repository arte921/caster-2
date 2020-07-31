class Shield {
    constructor(player) {
        this.sidelength = Math.sqrt(1 + Math.pow(player.shieldwidth / 2, 2));
        //this.bearing1 = (2 * Math.PI + player.bearing - player.fov / 2) % (2 * Math.PI)
        //this.bearing2 = (2 * Math.PI + player.bearing + player.fov / 2) % (2 * Math.PI)
        this.fov = player.fov;
        this.bearing1 = player.bearing - player.fov / 2;
        this.bearing2 = player.bearing + player.fov / 2;
        this.playerpos = player.pos;

        this.x1 = player.pos.x + Math.cos(this.bearing1) * this.sidelength;
        this.y1 = player.pos.y + Math.sin(this.bearing1) * this.sidelength;
        this.x2 = player.pos.x + Math.cos(this.bearing2) * this.sidelength;
        this.y2 = player.pos.y + Math.sin(this.bearing2) * this.sidelength;

        //console.log(this.x1,this.y1,this.x2,this.y2)

        this.pos1 = new Vector(this.x1, this.y1);
        this.pos2 = new Vector(this.x2, this.y2);
        this.dx = this.x2 - this.x1;
        this.dy = this.y2 - this.y1;
    }

    // what fraction of the screen
    rayintersect(part) {
        let a = this.bearing1 + part * this.fov;
        let x = this.playerpos.x + Math.cos(a);
        let y = this.playerpos.y + Math.sin(a);
        return new Vector(x, y);
    }
}
