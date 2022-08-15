function Auto(name, model, year, vin) {
    this.brand = name;
    this.model = model;
    this.releaseYear = year;
    this.vin = vin;
}

Auto.prototype.log = function() {
    console.log(`${this.brand}, ${this.model}, ${this.releaseYear}, ${this.vin}`);
}

Auto.prototype.checkVin = function() {
    if(this.vin.split('').length === 16) {
        return console.log('true')
    } else {
        return console.log('false')
    } 
}

let audi = new Auto('Audi', 'Q3', 2022, '1234567890123456');

function Auto_fuel(name, model, year, vin, fuel1, fuel2) {
    this.brand = name;
    this.model = model;
    this.releaseYear = year;
    this.vin = vin;
    this.fuelCapacity = fuel1;
    this.fuelConsumption = fuel2;
}

Auto_fuel.prototype = Object.create(Auto.prototype);

let bmw = new Auto_fuel('BMW', 'X1', 2022, '1234567890123456', '100', 50);

Auto_fuel.prototype.showFuelConsumption = function() {
    return console.log(`${this.fuelCapacity}, ${this.fuelConsumption}`);
}

function Auto_electric(name, model, year, vin, battery) {
    this.brand = name;
    this.model = model;
    this.releaseYear = year;
    this.vin = vin;
    this.batteryCapacity = battery;
}

Auto_electric.prototype = Object.create(Auto.prototype);

let tesla = new Auto_electric('Tesla', 'model 3', 2015, '123123123', '110');

Auto_electric.prototype.showBatteryConfig = function() {
    return console.log(`${this.batteryCapacity}`);
}
