const inquirer = require('inquirer');
const fs = require('fs');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)


const {Triangle, Square, Circle} = require('./lib/shapes');


    inquirer
        .prompt([

            {
                type: 'list',
                message: 'please choose the background shape of your logo from following selection, please note that max-width is 300 and max height is 200',
                name: 'shape',
                choices: ['Triangle', 'Circle', 'Square'],
            },
            {
                type: 'input',
                message: 'please specify the color of your Triangle using color name or hexadecimal value',
                name: 'color',
            },
            {
                type: 'input',
                message: 'please specify the logo text color',
                name: 'logocol',
            },
            {
                type: 'maxlength-input',
                message: 'please specify the logo text Three letter',
                maxLength: '3',
                name: 'logo',
            },


        ])

        .then((response) => {
            console.log(response.shape);
            console.log(typeof'response.shape');
            console.log(response.shape === 'Triangle');
            if (response.shape === 'Triangle') {

                const shape = new Triangle(response.color, response.logo, response.logocol);
                const svg = shape.render()
                fs.writeFile('./example/logo.svg', svg, (err) =>
                    err ? console.log(err) : console.log('successful'))

            } else if (response.shape === 'Square') {
                const shape = new Square(response.color, response.logo, response.logocol);
                const svg = shape.render()
                fs.writeFile('./example/logo.svg', svg, (err) =>
                    err ? console.log(err) : console.log('successful'))

            } else {
                const shape = new Circle(response.color, response.logo, response.logocol);
                const svg = shape.render()
                fs.writeFile('./example/logo.svg', svg, (err) =>
                    err ? console.log(err) : console.log('successful'))
            }

        })



