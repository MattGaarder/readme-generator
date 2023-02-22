const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const heya = require("./folder1/data")
console.log(heya);
// array of questions for user


// function to initialize program
function init() {
    inquirer.prompt(questions).then(answer => {
        fs.writeFile("./folder1/awesome.md", generateMarkdown(answer), err => console.log(err))

    })
}

// function call to initialize program
init();
