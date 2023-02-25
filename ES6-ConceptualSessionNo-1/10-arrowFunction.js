/* -------------function declaration-------------- */
show()

function show (){
    console.log('hello world')
}


/* --------------function expression-------------- */
const add1 = function(){
    console.log('hello world')
}
add1()


/* --------------function expression-------------- */
const add2 = function(x,y){
    return x+y
}

console.log(add2(3,4));



/* --------------Arrow function------------------- */
const add3 = (x,y) => x+y

console.log(add3(3,4));


/* --------------Arrow function------------------- */
const add4 = (x,y) => {
    const total = x+y;
    return total
}

console.log(add4(3,4));


/* --------------Arrow function------------------- */

const showName = name => console.log(name)
showName('mehedy')

/* --------------Arrow function------------------- */
const hello = () =>console.log('hello world')
hello()