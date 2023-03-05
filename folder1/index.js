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
    message: "Please provide guidance on how users can contribute to your project.",
    name: "contribution",
    type: "input",
  },
  {
    message: "Please select the license you would like to use for your project.",
    name: "license",
    type: "list",
    choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'Mozilla Public License 2.0'],
  },
  {
    message: "Please enter your email for those with further questions regarding the project, or any other concerns or issues.",
    name: "email",
    type: "input",
  },

  {
    message: "Please enter your github account for those wishing to view any other projects or material.",
    name: "account",
    type: "input",
  },
];
// console.log(inquirer);
module.exports = questions;
