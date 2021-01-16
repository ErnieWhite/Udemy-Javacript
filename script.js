/*

*******************************CODING TASK No 1**************************************

1. Create variables to represent scores of exams for John and Nick and set values as 80 and 45
2. Create variable to set the lower limit for passing an exam and assign to it value as 51
3. Write the condition in if statement, which will check if both students have passed an exam and log the result in console
4. Use else if statement in order to check if one of the students has passed an exam and log result in console
5. Use else statement in order to display in console that both students have failed
6. In case of passing the exam by one of the students, find out which one was that and display in console as an
   additional information the student name and his points
7. Test all possble cases
    a. both students passed and exam;
    b. Joyhn passed and Nick failed;
    c. Nick passed and John failed
    d. Both students failed

*/

//SOLUTION:

var johnScore = 80;
var nickScore = 90;
var minPassingScore = 51;
if (johnScore >= minPassingScore && nickScore >= minPassingScore) {
    console.log("Both passed")
} else if (nickScore >= minPassingScore) {
    console.log("Nick passed with a score of " + nickScore)
} else if (johnScore >= minPassingScore) {
    console.log("John passed with a score of " + johnScore)
} else {
    console.log("Both failed")
}
