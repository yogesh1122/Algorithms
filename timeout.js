
console.log('first statement');
// let call=(agr)=>{ console.log(`second statement and value ${agr}`)
// }

// console.log( setTimeout(call ,1000*10,'YOgesh'));

// console.log(setTimeout( ()=>{ console.log('third statement')
// },1000));

console.log('fourth statement');

let timerId = setImmediate(() => console.log('tick'), 2000);

// after 5 seconds stop
clearImmediate(() => { clearImmediate(timerId), console.log('stop after 10 second') }, 1000*10);
