const person ={
    first_name: "Daniel",
    last_name: "Mwakamole",
    age: 21,
    occupation: "Software Developer",
    hobbie: "fitness"
}
document.getElementById("dan").innerHTML=`My name is ${person.first_name} ${person.last_name}`;
document.getElementById("age").innerHTML='I am ' +person.age+ ' years old';
document.getElementById("career").innerHTML="I am a " + person.occupation + " by profession";
