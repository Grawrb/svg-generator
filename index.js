const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { default: Choices } = require('inquirer/lib/objects/choices');

// prompts for Inquirer
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter three characters",
        // Function to validate that user entered exactly three characters, otherwise return error message
        validate: function (value) {
            if (value.length === 3) {
                return true;
            } else {
                return "You must enter three charcters"
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color (you may use a color keyword or a hexidecimal number"
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape for your logo",
        choices: ["Circle, Triangle, Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for your selected shape (you may use a color keyword or a hexidecimal number"
    },
];

