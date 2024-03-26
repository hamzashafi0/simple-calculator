#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  { message: "select one of the operators to perform action",
    type: "list",
    name: "operators",
    choices : ["addition","subraction", "multiplication","division"] 
  },
]);

if (answer.operators  === "addition")  {
  console.log( answer.firstnumber + answer.secondnumber);
}else if(answer.operators === "subraction"){
  console.log(answer.firstnumber - answer.secondnumber);
}else if(answer.operators === "multiplication"){
  console.log(answer.firstnumber * answer.secondnumber);
}else if(answer.operators === "division"){
  console.log(answer.firstnumber / answer.secondnumber);
}else{
  console.log("please select invalid opperators")
}