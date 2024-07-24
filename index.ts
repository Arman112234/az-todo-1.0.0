#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
  let addtask = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "What You want to add in your todo's",
      default: "Type Your desired todo here",
    },
    { name: "addmore", type: "confirm", message: "Do you want to add more" },
    //   { name: "", type: "", message: "" },
  ]);
  todos.push(addtask.todo);
  condition = addtask.addmore
  console.log(todos);
}
