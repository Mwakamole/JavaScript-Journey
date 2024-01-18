function greet(){
    document.getElementById("function").innerHTML= "Hello Mwakamole"
}
greet()
let x;
function math(a,b){
    x = a + b;
    document.getElementById('button').innerHTML = x;
}
math(2,8);
function identity(fname, lname){
    document.getElementById('identity').innerHTML = "People know me as "+fname+" "+lname+" " ;
}
identity("Daniel", "Mwakamole");