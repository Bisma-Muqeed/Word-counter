// import the inquirer module, which is a command line interface for node.js
import inquirer from "inquirer";
// declare a constant "answer" and assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter Your sentence to Count the Word"
});
const words = answer.sentence.trim().split(" ");
// print the arrayof words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`Your sentence words count is ${words.length}`);
