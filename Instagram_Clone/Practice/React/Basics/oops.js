class superCar{
    constructor(turbo){
        this.turbo = turbo;
    }
}

class car extends superCar{
    constructor(name, price, transmission, turbo){
        super(turbo);
        this.name = name;
        this.price = price;
        this.transmission = transmission;
    }
    getDetails(){
        console.log(this);
        console.log(this.name + this.price + this.transmission);
    }
}

let dzire = new car("Maruti", "9lakh", "Manual");

dzire.getDetails();

let mustang = new car("MustangGT", "85lakh", "Automatic","superjet");

mustang.getDetails();
