// console.log("hello");

// // let obj=[10,80];
// // let map=obj.map(function(a){});
// // console.log(map);

// const map = new Map()

// map.set(5, "Hello")
// map.set("5", "World")
// map.set("John", "The revelator")
// map.size // 3
// // Map { 5 => 'Hello', '5' => 'World', 'John' => 'The revelator' }
// console.log(map.get(''));

// map.get(5) // Hello
// map.has('5') // true
// map.get('Random') // undefined
// map.has('John') // true

// // map.delete('5')
// // map.size // 2
// // // Map { 5 => 'Hello', 'John' => 'The revelator' }

// // map.clear()
// // map.size // 0
// // // Map {}

// console.log(map);

// console.log(Object.is(5, '5'));
//  // false
// console.log(Object.is({}, {}));
 

let myArray={name:"yo",sir:"and",mob:"89898",pass:"youing"};
let map=new Map(Object.entries(myArray));
console.log(map.keys());

for(let key of map.keys())
{
    console.log(key);
    
}

let myarr=[10,59,11,78,78,98];

let num=myarr.find( (e) =>{ return e>10});// return first condition to satisfied

console.log(num);


//Filter data
console.log('***********************Filter data Output******************');


let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

let abc=cities.filter((e)=>
{
    
    if(e.name=='Philadelphia')
    {
        console.log(e.population);
        
    }    
})








//best filter example

let arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ]
  
  let invalidEntries = 0
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
  }
  
  function filterByID(item) {
    //console.log(`check ${item.id}`);
    
    if (isNumber(item.id) && item.id !== 0) {
      return true
    } 
    invalidEntries++
    return false;
  }
  
  let arrByID = arr.filter(filterByID)
  
  console.log('Filtered Array\n', arrByID)
  // Filtered Array
  // [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log('Number of Invalid Entries = ', invalidEntries)
  // Number of Invalid Entries = 5



  console.log('*************************USe multiple ****************');


let aa=cities.filter(function (e) {
    return e.population < 3000000;
}).sort(function (a, b) {
    return b.population - a.population;
}).map(function (e) {
    console.log(e.name + ':' + e.population);
});









//Reducer
/*The reduce() method executes a reducer function (that you provide) 
on each element of the array, resulting in a single output value.
*/


let rarr=[1,2,3,4,5,6,7,8,9,10];

let reduce=rarr.reduce( (a,b)=>a+b,5)
console.log(reduce);


let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x )
let maxCallback2 = ( max, cur ) => Math.max( max, cur )

// reduce() without initialValue
[ { x: 22 }, { x: 42 } ].reduce( maxCallback ) // 42
[ { x: 22 }            ].reduce( maxCallback ) // { x: 22 }
//[                      ].reduce( maxCallback ) // TypeError

// map/reduce; better solution, also works for empty or larger arrays
let md=[ { x: 22 }, { x: 42 } ].map( el => el.x )
           .reduce(( max, cur ) => Math.max( max, cur ), -Infinity )
console.log(md);

let arr7=[5,51,07,8];

console.log(Math.min(...arr7));

                        