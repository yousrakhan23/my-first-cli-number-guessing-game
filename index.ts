#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWELCOME TO MY FIRST CLI NUMBER GUESSING GAME\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);

if (answer.userGuessdNumber === randomNumber){
     console.log("Congratulations ! You Guess A Correct Number.");
}
else{
    console.log("Oops ! You Guess A Wrong Number");

}