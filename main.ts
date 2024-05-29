#! /usr/bin/env node
import inquirer from "inquirer";  
import chalk from "chalk";
let todolist = [];
let conditions= true;

console.log(chalk.bgMagenta("\n \t Welcome to CodeWithHani- Todo List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task", 
            type: "input",
            message:"Enter Your New Task : ",
        }
    ]);
    todolist.push(addTask.task);
    console.log(`${addTask.task}Task added in Todo-List successfully!`);

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "False",
        }
    ]);
    conditions = addMoreTask.addmore;
}

//Now to print all the tasks using the while loop, we use the following coomand to print the tasks
console.log("Your updated Todo-list:" , todolist);

