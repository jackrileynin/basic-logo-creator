const fs = require('fs').promises;
const { Triangle, Circle, Square, Shape } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const chalk = require("chalk");

const makeShape = () => {
return inquirer
    
    .prompt([
        {
            type: "list",
            name: "shape",
            message: "What shape would you like?",
            choices: ["triangle", "circle", "square"]
        },

        {
            type: "text",
            name: "color",
            message: "What color would you like your shape to be? (use a hex code)",
        },

        {
            type: "text",
            name: "text",
            message: "What text do you want in your shape?"
        }

 ]);
};
// the switch statement does not need a break statement since the result needs to be returned to be used in a promise
const createShape = (answer) => { 
    switch (answer.shape) {

         case "triangle":
            answer.color = answer.color || "#000000";
         return new Triangle().returnShape(answer.color, answer.text);

     case "circle":
            answer.color = answer.color || "#000000";
            return new Circle().returnShape(answer.color, answer.text);

        case "square":
            answer.color = answer.color || "#000000";
            return new Square().returnShape(answer.color, answer.text);



        default:
            throw new Error("Invalid shape selected");
    }
}; 
// modulerizes the CIL prompt and the logic that passes the user's input to the appropriate class method
// then uses the "then" method to that handles the promise returned by the inquirer prompt and the promise returned by the class method
// this separates the concerns of the CIL prompt and the logic that creates the shape
makeShape()
    .then(createShape)
     .then((result) => {
        console.log(result);
        return fs.writeFile("shape.svg", result);
    })
    .then(() => {
        console.log(chalk.green("shape.svg has been created!"));
    })
    .catch((error) => {
        console.error(chalk.red(error.message));
    });