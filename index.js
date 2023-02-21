const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        message: "how are you today?",
        name: "greeting",
        type: "input",
      },
];

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answer => {
        fs.writeFile("./folder1/awesome.md", generateMarkdown(answer), err => console.log(err))

    })
}

// function call to initialize program
init();
