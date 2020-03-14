# passwordGenerator
Homework 3 of Code Course
https://ejlopez44.github.io/passwordGenerator/

Objective was to take the given html, css and starting js file to add functionality behind a random password generator.

Requirements:
- Prompt user for password length
- Prompt user for types of characters to include in password: Special, Upper/Lowercase, Numbers
- Ensure passwords are between 8 & 128 characters
- Generate a random string of characters based on the user's input

Workflow steps
- Print some basic string to the text box utilizing the generate button
- define variable for the length of a given password using a prompt
- define variables or an array of the types of acceptible characters
- determine IF the user's length input is between 8 <> 128
- Create a function to run through confirmations to determine which variables of character types to use
- Create a string of the characters confirmed
- Create a loop function to choose a letter at random (from the newly created string of acceptible characters) for the amount of letters specified by the user's length input
- Update the password variable of the string created
- Equate the password variable to the variable of the query selector for the text box to display to the user
- Define an alert if the user selects outside of the acceptible password length range 