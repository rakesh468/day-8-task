class Uber_price {
    constructor(timeofride, ride_distance){
        this.timeofride = timeofride;
        this.ride_distance = ride_distance;
    }
    price(){
        return "The Ridefare of Customer is: $" +( 9*(((0.30*this.timeofride ) + (0.85*this.ride_distance)) * 4) + 1.85 );
    }
}

let person1 = new Uber_price(80, 45);
console.log(person1.price()); 