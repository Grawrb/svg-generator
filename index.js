// Import inquirer and fs node packages. Import shape classes
const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// prompts for Inquirer
const questions =  [

    {
        message: "Enter three characters",
        type: "input",
        name: "text",
        
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
        message: "Enter a color for the text to be used (you may use a color keyword or a hexidecimal number)",
        type: "input",
        name: "textColor",
        
    },
    {
        message: "Select a shape for your logo",
        type: "list",
        name: "shape",
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        message: "Enter a color for your selected shape (you may use a color keyword or a hexidecimal number)",
        type: "input",
        name: "shapeColor",
    },
];

// Runs inquirer and captures user answers. Takes user input and assigns selected shape and color to 'shape' variable.
inquirer.prompt(questions).then((answers) => {
    let shape;
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'Circle':
            shape = new Circle(answers.shapeColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
    }

    // Generates html of new svg. Uses user inputs for shape, text content, and text color
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
        </svg>
    `;

    // Writes new svg to file named 'logo.svg' and logs success message to console
    fs.writeFileSync('logo.svg', svg.trim());
    console.log('Generated logo.svg');
});

