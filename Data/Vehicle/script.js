//Create a Vehicle class with properties brand and year.
//Create a Car class that extends Vehicle and adds a fuelType property.
//Create a Bike class that extends Vehicle and adds a hasGear property.
//Add another class ElectricCar that extends Car and adds a batteryCapacity property.
//Implement a getDetails() method in Vehicle and override it in different subclasses.


class Vehicle {

    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getDetails() {
        document.writeln(this.brand);
        document.writeln(this.year);
    }

}

class Car extends Vehicle {
    constructor(brand, year, fuelType) {
        super(brand, year);
        this.fuelType = fuelType;
    }

    getDetails() {
        super.getDetails();
        document.writeln(this.fuelType);
    }
}

class Bike extends Vehicle {
    constructor(brand, year, hasGear) {
        super(brand, year);
        this.hasGear = hasGear;
    }

    getDetails() {
        super.getDetails();
        document.writeln(this.hasGear);
    }
}

class ElectricCar extends Car {

    constructor(brand, year, batteryCapacity) {
        super(brand, year);
        this.batteryCapacity = batteryCapacity;
    }

    getDetails() {
        super.getDetails();
        document.writeln(this.batteryCapacity);
    }

}

const ecar = new ElectricCar("Toyota", 2022, "Petrol", "yes","kWh")
ecar.getDetails();
