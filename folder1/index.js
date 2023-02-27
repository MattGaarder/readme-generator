// const questions = require('./data');
// const obj = require('./info');
const questions = [
    {
      message: "Please enter your Project Title",
      name: "title",
      type: "input",
    },
    {
      message: "Please provide a short description of your project.",
      name: "description",
      type: "input",
    },
    {
      message: "Would you like a table of contents?",
      name: "table",
      type: "input",
    },
  ];
// console.log(inquirer);
 module.exports = questions;