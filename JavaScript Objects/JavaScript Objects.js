//Declaring a simple object
const car = {
    make: "mercedes",
    model: "E350",
    color: "black"
}
//Accessing the properties and displaying them in a html page
document.getElementById("myCar").innerHTML = `I drive a ${car.color} ${car.make} ${car.model}.` ;

//Another object that incorporates the use of methods
const identity = {
    firstName:"Daniel",
    lastName:"Mwakamole",
    age:21,
    //The following line declares a method
    fullName: function(){
        return `${identity.firstName} ${identity.lastName}`;
    }
    //calling the method
}
document.getElementById("me").innerHTML = "My name is " +identity.fullName();