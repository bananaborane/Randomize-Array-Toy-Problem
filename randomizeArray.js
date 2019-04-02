// given the following array, create a function that will randomize it.

const students = [
  'Dan',
  'Brack',
  'Erin',
  'Geordyn',
  'Jess',
  'Sarah',
  'Andrew',
  'Ryan',
  'Tim',
  'Stephen',
  'David',
  'Mark'
];

function randomize(array){
  let newArr = [];
  do {
  array.forEach((val, i)=>{
    if (Math.round(Math.random())){
      // if condition is a 'coin toss'
      newArr.push(val)
      array.splice(i, 1)
      // removes the element from the array after pushing it to the newArr
    }
  })
  // runs this block of code while there is still elements in the array
  } while (array.length !==0)
  return newArr;
}

console.log(randomize(students))



// Making some dummy data
const arr = [];
for (let i = 0; i < 10000; i++) arr.push(i);
// Benchmarking the function 
let start = Date.now()

console.log(randomize(arr))

console.log('Time:', (Date.now() - start));