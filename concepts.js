// // Map 
// const data= new Map();
// data.set('name', 'John');
// data.set('age', 30);
// data.set(2, 'two');
// data.set(true, 'boolean value');

// console.log(data); // Output: Map(4) { 'name' => 'John', 'age' => 30, 2 => 'two', true => 'boolean value' }
// console.log(data.get('name')); // Output: John
// console.log(data.get(2));
// console.log(data.get(true));
// console.log(data.has('age'));
// console.log(data.size); // Output: 4
// data.delete(2);
// console.log(data); // Output: Map(3) { 'name' => 'John', 'age' => 30, true => 'boolean value' }

function throttle(fn,delay){
    let lastCall=0;
    return  function(...args){
        let now= new Date().getTime();
        if(now-lastCall >=delay){
            lastCall=now;
            fn(...args)
        }
    }
}

const handleDemo=() =>{
    console.log('demo')
}
const re=throttle(handleDemo,500);
window.addEventListener("resize", re);