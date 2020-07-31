class Player{
    constructor(pos, bearing, fov) {
        //bearing and fov in radians
        this.pos = pos;
        this.bearing = bearing;
        this.fov = fov;
        this.speed = 1;
        this.shieldwidth = 2 / Math.tan(0.5 * (Math.PI - fov));
        this.minimap = new Minimap(0, 0, 80, 100, 100, walls); //minx, miny, xsize, scenewidth, sceneheight, walls
        this.shield = new Shield(this);
        
    }
}