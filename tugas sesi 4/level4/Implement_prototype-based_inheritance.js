function Vehicle(brand) {
    this.brand = brand;
}

Vehicle.prototype.getinfo = function() {
    return `Vehicle brand: ${this.brand}`;
};

function Car(brand, doors) {
    Vehicle.call(this, brand);
    this.doors = doors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const car1 = new Car("Toyota", 4);
const car2 = new Car("Honda", 2);

console.log(car1.getinfo());
console.log(car2.getinfo());

console.log(car1.getinfo === car2.getinfo);