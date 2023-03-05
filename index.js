const fs = require("fs");
// const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const heya = require("./folder1/index")
// array of questions for user


// function to initialize program
function init() {
    inquirer.prompt(heya).then(answer => {
        console.log(answer);
        fs.writeFile("./folder1/README.md", generateMarkdown(answer), err => console.log(err))
    })
}

// function call to initialize program
init();
