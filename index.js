const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

// prompts for Inquirer
function questions()  {
    inquirer.prompt([

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
        message: "Enter a color for the text to be used (you may use a color keyword or a hexidecimal number)"
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
        message: "Enter a color for your selected shape (you may use a color keyword or a hexidecimal number)"
    },
    ])
    .then((answers) => {
        console.log(answers);
        const svg = generateSVG(answers);
        fs.writeFile('logo.svg', svg, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    });
}
questions();

function generateSVG(answers) {
    let shape;
    switch (answers.shape) {
        case "Circle":
            shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case "Triangle":
            shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
            break;
        case "Square":
            shape = new Square(answers.text, answers.textColor, answers.shapeColor);
            break;
    }
    return shape.render();
};


