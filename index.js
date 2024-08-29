// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input

const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'editor',
            name: 'description',
            message: 'Please provide a description of your project.',
            default: 'This is a description of my project',
            waitUserInput: false,
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'Please provide installation instructions.',
            default: 'npm install',
            waitUserInput: false,
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines.'
        },
        {
            type: 'editor',
            name: 'test',
            message: 'Please provide test instructions.',
            default: 'npm test',
            waitUserInput: false,
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project.',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        }
    ];       

// TODO: Create a function to write README file
    function writeFile(data) {
        fs.writeFile("Readme.md", data, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("File created successfully!");
            }
        });
    }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeFile(markdownContent);
    });
};
// Function call to initialize app
init();
