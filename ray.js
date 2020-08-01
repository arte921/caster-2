class Ray {
    constructor(pos1, pos2) {
        this.pos1 = pos1;   // origin
        this.pos2 = pos2;   // starts on shield, moves trough space
        this.bearing = Math.tan((pos2.x - pos1.x) / (pos2.y - pos1.y));
    }

    move = (dist) => this.pos2 = this.pos2.plusLength(dist);
}
