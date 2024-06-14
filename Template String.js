let firstName = "Daniel";
let lastName = "Mwakamole";
function greet(){
    console.log(`Hello, my name is ${firstName} ${lastName}`); //The function has backtics; hence a template string
}

//Another example of  template string

let car = `Mercedes`
let model = `S-Class`
let statement = `I drive a ${car} ${model}`;
console.log(statement); //Output: I drive a Mercedes S-Class
return greet();
