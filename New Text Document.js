function Car(model,transmission,color){
    this.model = model;
    this.transmission = transmission;
    this.color = color; 

    
}

 Car.prototype.greet = function(){
    console.log("I own a " + this.model + " with " + this.transmission + " transmission")
}  

const Car1 = new Car("Benzo","automatic","black");
const Car2 = new Car("Nissan","manual","white");

console.log("You drive a " +Car2.model);
console.log("My car is " +Car2.color);


console.log( Car2.greet());