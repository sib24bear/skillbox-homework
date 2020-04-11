'use strict';

class Vehicle {
    constructor(name, engine, carrying, move) {
        this.name = name; // наименование транспортного средства
        this.engineType = engine; // тип двигателя
        this.maxCarryingСapacity = carrying; // грузоподъемность
        this.wayToMove = move; // способ передвижения
    }

    typeVehicle() {
        console.log(`${this.name} передвигается по ${this.wayToMove}`);
    }
}

Vehicle.prototype.carryingСapacityVehicle = function(){
    console.log(`${this.name} может перевозить до ${this.maxCarryingСapacity} тонн`);
};

class Car extends Vehicle {
    constructor(name, engine, carrying, move, fuel, brand) {
        super(name, engine, carrying, move);
        this.typeFuel = fuel; // тип топлива
        this.brandManufacturer = brand; // марка автомобиля
    }
}

Car.prototype.carryingСapacityVehicle = function() {
    console.log(`${this.name} марки ${this.brandManufacturer} может перевозить до ${this.maxCarryingСapacity} килограмм`);
};

class Ship extends Vehicle {
    constructor(name, engine, carrying, move, displacement, waterAria) {
        super(name, engine, carrying, move);
        this.displacement = displacement; // водоизмещение
        this.typeWaterAria = waterAria; // тип акватории
    }

    changeMoveWaterAria(type) {
        this.wayToMove = type;
    }
}

class Airplane extends Vehicle {
    constructor(name, engine, carrying, move, range, typeOfAircraft) {
        super(name, engine, carrying, move);
        this.rangeOfFlight = range; // дальность полета
        this.typeOfAircraft = typeOfAircraft; // тип воздушногго судна
    }
}