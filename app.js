// // alert('hello world')
// console.log('hello');
// const myVegetables = ['broccoli', 'potato', 'carrot'];
// myVegetables[1];
// let color = 'blue';
// color = 'fyusha';
// const flavor = 'spicy';
// flavor = 'savory';

const dog = {
    name: 'fido',
    color: 'brown',
    weight: 500,
}

console.log(dog.name);
//Printing initial declaration
dog.name = "rover"
console.log(dog.name)
//Printing the new value

if
(dog.name === "rover") {
    console.log('red rover, red rover, come over')
}

else if
(dog.name==='spot') 
{
    console.log('spot is a deeeec name')
}

else {
    console.log('you are a normal dog')
}

// count up to ten

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

const vegs = ['taters', 'samsquatches', 'nanas']
for (let i = 0; i <= 2; i++) {
    console.log(i);
    console.log(vegs[i]);
}

for (let i = 0; i<= 5; i++) {
    if(i===1) {
        console.log(vegs[i]);
    }
}

function showAlert() {
    alert('you clicked the button');
}

function logHello() {
    console.log("Hello!")
}