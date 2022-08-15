class Auto {
    constructor(name, model, year, vin) {
        this.brand = name;
        this.model = model;
        this.releaseYear = year;
        this.vin = vin;
    }

    log = () => console.log(`${this.brand}, ${this.model}, ${this.releaseYear}, ${this.vin}`);
    
    checkVin = () => (this.vin.split('').length === 16) ? console.log('true') : console.log('false');
}

let audi = new Auto('Audi', 'Q3', 2022, '1234567890123456');

class Auto_fuel extends Auto {
    constructor(name, model, year, vin, fuel1, fuel2) {
        super(name);
        this.brand = name;
        this.model = model;
        this.releaseYear = year;
        this.vin = vin;
        this.fuelCapacity = fuel1;
        this.fuelConsumption = fuel2;
    }

    showFuelConsumption = () => console.log(`${this.fuelCapacity}, ${this.fuelConsumption}`)
}   

let bmw = new Auto_fuel('BMW', 'X1', 2022, '1234567890123456', '100', 50);

class Auto_electric extends Auto {
    constructor(name, model, year, vin, battery) {
        super(name);
        this.brand = name;
        this.model = model;
        this.releaseYear = year;
        this.vin = vin;
        this.batteryCapacity = battery;
    }

    showBatteryConfig = () => console.log(`${this.batteryCapacity}`);
}

let tesla = new Auto_electric('Tesla', 'model 3', 2015, '123123123', '110');

