const {prompt} =  require("inquirer");
const fs = require('fs');
const {arr} = require('./folder1');
// const {questions} = require("./folder1")


// const doSomething = () => {
//     console.log(arr);
// }

// doSomething();

function promptTheUser(){
    prompt(arr.questions).then(answer => {
    console.log(`you are feeling ${answer.greeting} today`)
})
}

promptTheUser();
