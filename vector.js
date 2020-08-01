class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    length = () => Math.sqrt(this.x ** 2 + this.y ** 2);

    dotProduct = (other) => this.length * other.length * Math.cos(this.toAngle() - other.toAngle());

    multiply = (other) => new Vector(this.x * other.x, this.y * other.y);

    multiplyNumber = (factor) => new Vector(this.x * factor, this.y * factor);

    normalized = () => this.multiplyNumber(1 / this.length());

    withLength = (length) => this.normalized().multiplyNumber(length);

    toAngle = () => Math.tan(this.y / this.x);

    plusLength = (extra) =>  this.withLength(this.length() + extra);

    rounded = () => new Vector(
        Math.round(this.x),
        Math.round(this.y)
    );

    sum = (other, multiplier = 1) => new Vector(
        this.x + other.x * multiplier,
        this.y + other.y * multiplier
    );

    distanceTo = (other) => Math.sqrt(
        (other.x - this.x) ** 2 +
        (other.y - this.y) ** 2
    );

    rotate(angle) {
        let l = this.length();
        let currentAngle = this.toAngle();
        let newAngle = currentAngle + angle;
        return this.withAngle(newAngle);
    }

    withAngle(angle) {
        let l = this.length();
        let t = Math.tan(angle); // y / x
        let x = Math.sqrt(l ** 2 / (1 + t ** 2));
        let y = t * x;
        return new Vector(-x, -y);
    }
}