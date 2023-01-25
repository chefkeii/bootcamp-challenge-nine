// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'what is the installation',
      name: 'installation',
    },
    {
    type: 'input',
    message: 'What is the usage?',
    name: 'usage',
    },
    {
    type: 'list',
    message: 'Please select license used:',
    name: 'license',
    choices: [ 'None',
'Apache License 2.0',
'GNU General Public License v3.0',
'MIT License',
'BSD 2-Clause "Simplified" License',
'BSD 3-Clause "New" or "Revised" License',
'Boost Software License 1.0',
'Creative Commons Zero v1.0 Universal',
'Eclipse Public License 2.0',
'GNU Affero General Public License v3.0',
'GNU General Public License v2.0',
'GNU Lesser General Public License v2.1',
'Mozilla Public License 2.0',
'The Unlicense',
    ]
    },
    {
    type: 'input',
    message: 'Contributers:',
    name: 'contributers',
    },
    {
    type: 'input',
    message: 'Please add test:',
    name: 'tests',
    },
    {
    type: 'input',
    message: 'Please add your GitHub profile:',
    name: 'github',
    },
    {
    type: 'input',
    message: 'Please add your email:',
    name: 'email',
    }
  ])

