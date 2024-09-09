#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = true;
while (condition) {
    var addtask = await inquirer_1.default.prompt([
        {
            name: "todo",
            type: "input",
            message: "What You want to add in your todo's",
            default: "Type Your desired todo here",
        },
        { name: "addmore", type: "confirm", message: "Do you want to add more" },
        { name: "", type: "", message: "" },
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
