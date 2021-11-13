// TODO: Include packages needed for this application (inquirer, fs, etc.)
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
    //I get these are the questions, but how will someone use this tool for their own project. They clone it and it serves as their forever readme generator? Creating files?
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "projectDescription",
        message: "Give a short description of your project.",
        
    },
];

const promptUser = () => {
  return inquirer.prompt(questions)
}


const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
