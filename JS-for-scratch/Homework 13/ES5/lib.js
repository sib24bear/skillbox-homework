'use strict';

function Vehicle(name, engine, carrying, move){
    this.name = name; // наименование транспортного средства
    this.engineType = engine; // тип двигателя
    this.maxCarryingСapacity = carrying; // грузоподъемность
    this.wayToMove = move; // способ передвижения

    this.typeVehicle = function() {
        console.log(this.name + ' передвигается по ' + this.wayToMove);
    }
}

Vehicle.prototype.carryingСapacityVehicle = function(){
    console.log(this.name + ' может перевозить до ' + this.maxCarryingСapacity + ' тонн');
};

function Car(name, engine, carrying, move, fuel, brand) {
    Vehicle.apply(this, arguments);
    this.typeFuel = fuel; // тип топлива
    this.brandManufacturer = brand; // марка автомобиля
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.carryingСapacityVehicle = function() {
    console.log(this.name + ' марки ' + this.brandManufacturer + ' может перевозить до ' + this.maxCarryingСapacity + ' килограмм');
};

function Ship(name, engine, carrying, move, displacement, waterAria) {
    Vehicle.apply(this, arguments);
    this.displacement = displacement; // водоизмещение
    this.typeWaterAria = waterAria; // тип акватории

    this.changeMoveWaterAria = function(type) {
        this.wayToMove = type;
    }
}

Ship.prototype = Object.create(Vehicle.prototype);

function Airplane(name, engine, carrying, move, range, typeOfAircraft) {
    Vehicle.apply(this, arguments);
    this.rangeOfFlight = range; // дальность полета
    this.typeOfAircraft = typeOfAircraft; // тип воздушногго судна
}

Airplane.prototype = Object.create(Vehicle.prototype);
