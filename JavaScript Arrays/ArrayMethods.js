//The length method used to return the length of an array
const schools = ["MMU","KU","JKUAT","TUM"];
console.log(schools.length);

//The at() method returns an indexed element from an array
console.log(schools.at(0));

//The pop() method removes the last element from an array
schools.pop();
//Notice that after popping the new length of the array is now 3
console.log(schools.length);

//The push() method adds a new element to an array (at the end)
schools.push("DEKUT");
//Notice that after pushing the new length of the array is now back to 4
console.log(schools.length);
console.log(schools[3]);

//The shift() method removes the first array element and "shifts" all other elements to a lower index
schools.shift();
//Notice that after shifting the new length of the array is now 3
console.log(schools.length);
console.log(schools[0]);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
schools.unshift("CUEA");
console.log(schools);

//Deleting an item in an array
delete schools[0];
console.log(schools);

//Other arrays; created with the intention of caoncatenating them
const myGirls = ["Jackie","Sylvia"];
const myBoys = ["Sam","Robert"];
const myChildren = myBoys.concat(myGirls);
console.log(myChildren);
