'use strict';
let btn = document.getElementById('btn');

btn.onclick = function() {
    let car1 = new Car('автомобиль', 'бензиновый ДВС', 660, 'земле', 'бензин', 'BMW');
    car1.typeVehicle();
    car1.carryingСapacityVehicle();

    let ship1 = new Ship('корабль', 'дизельный ДВС', 8, 'воде', 30, 'рекам');
    ship1.typeVehicle();
    ship1.changeMoveWaterAria('рекам');
    ship1.carryingСapacityVehicle();

    let airplane1 = new Airplane('самолет', 'реактивный', 20, 'воздуху', 5400, 'пассажирский самолет');
    airplane1.typeVehicle();
    airplane1.carryingСapacityVehicle();
}