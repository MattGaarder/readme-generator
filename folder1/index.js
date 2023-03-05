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
    message: "Please detail how to install any dependencies or prerequisites needed for the project, along with instructions on how to clone or download the project from a repository.",
    name: "install",
    type: "input",
  },
  {
    message: "Please provide instructions on how to use your project or application. Include information on how to run the project, how to interact with it, and any commands or parameters that are available.",
    name: "usage",
    type: "input",
  },
  {
    message: "Please use this section to include any screenshots of your final application.",
    name: "screenshot",
    type: "input",
  },
  {
    message: "Please select the license you would like to use for your project.",
    name: "license",
    type: "list",
    choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'Mozilla Public License 2.0'],
  },
  {
    message: "Please enter your email and github username for those with further questions regarding the project or any other concerns or issues.",
    name: "contact",
    type: "input",
  },
  {
    message: "Would you like a table of contents?",
    name: "table",
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
