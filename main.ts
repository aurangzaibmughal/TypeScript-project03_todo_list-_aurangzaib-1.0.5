#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

let todolist  = [];
let conditions = true;

console.log(chalk.green.bold("\n \t Wellcome to code with Aurangzaib Mughal todo list Application\n \t"));


while(conditions) {
 let addTask = await inquirer.prompt(
    [
    {
        name: "task",
        type: "input",
        message: "Enter your New Task",
    }
]);
todolist.push(addTask.task);
console.log(`${addTask.task}Taskadded in Todo-List successfully`);

let addMoreTask = await inquirer.prompt([
    {
        name: "addmore", 
        type: "confirm",
        message: "Do you want to add more task ?",
        default: "False"
    }
])
conditions = addMoreTask.addmore
};
console.log("Your updated todo-List" , todolist);

