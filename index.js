#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
console.log("\n\tWELCOME TO MY FIRST CLI NUMBER GUESSING GAME\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer_1.default.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessdNumber === randomNumber) {
    console.log("Congratulations ! You Guess A Correct Number.");
}
else {
    console.log("Oops ! You Guess A Wrong Number");
}
