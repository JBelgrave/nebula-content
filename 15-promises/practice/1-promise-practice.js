// // 1.   What is the order of output?
// setTimeout(() => {
//     console.log('a'); //6
// }, 10);

// console.log('b'); //1

// new Promise((res, rej) => { res('c') }).then((val) => console.log('d', val)); //3

// console.log('e'); //2

// setTimeout(() => {
//     console.log('f'); //5
// }, 0);

// setTimeout(() => {
//     console.log('g'); //7
// }, 20);

// new Promise((res) => { res('h') }).then(res => console.log(res, 'i')) //4
// // console.log's > new promises > timeouts

// // 2.   Create a new promise for something you may or may not do. 
// //      After a few seconds log whether it has been done.
// //      randomize if its going to resolve or reject

const homeworkPromise = new Promise((resolve, reject) => {
    const doesHomework = Math.random() >= 0.5

    setTimeout(() => {
        if (doesHomework) {
            resolve('Homework has been done.')
        } else {
            reject('Homework has not been done.')
        }
    }, 2000)
})

// // 3.   Using the prior example use .then and .catch to handle responses and rejections
// homeworkPromise
//     .then(result => console.log(result))
//     .catch(error => console.error(error))


// // 4.   What does a promise resolve to?
// // a value given to the promise


// 5. What is the output of the following code?

const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then((v) => {
    console.log(v);
  });

