
class Car {
    #brand;
    #model;
    #acceleration;
    speed = 0;
    hasTrunk = true;
    isTrunkOpen = false;

    constructor(carDetails) {
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.#acceleration = carDetails.acceleration;
        if(carDetails.hasTrunk !== undefined) {
            this.hasTrunk = carDetails.hasTrunk;
        }
        
    }

    displayInfo() {
        const TrunkStatus = this.hasTrunk ? (this.isTrunkOpen ? 'open' : 'close') : 'N/A';
        console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h. Trunk: ${TrunkStatus}`);
    };

    go() {
        if(!this.isTrunkOpen) {
            this.speed += 5;
        }
        if (this.speed > 200) {
            this.speed = 200;
        }
        if(this.#acceleration) {
            this.speed += this.#acceleration;
        }
        
    }

    brake() {
        this.speed -= 5;
        if(this.speed < 0) {
            this.speed = 0
        }
    }

    openTrunk() {
        if(this.hasTrunk && this.speed === 0) {
            this.isTrunkOpen = true;
        }
    }

    closeTrunk() {
        if(this.hasTrunk)
        this.isTrunkOpen = false;
    }

}


    const car1 = new Car ({
        brand: 'Toyota',
        model: 'Corolla',
        
      
    });

    const car2 = new Car ({
        brand: 'Tesla',
        model: 'Model 3',
        
    });

    const raceCar = new Car({
        brand : 'Mclaren',
        model: 'f1',
        acceleration : 20,
        hasTrunk : false,
    })

   
    car1.openTrunk();
    car1.brake();
    car1.displayInfo();
    
    car2.go();
    car2.openTrunk()
    car2.displayInfo();

    raceCar.openTrunk();
    raceCar.go();
    raceCar.displayInfo();


    



