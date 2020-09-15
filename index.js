// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 = name of variable; doesn't have a global variable, variable is inside the function
 * counter2 = name of function; as a global variable, the variable is outside the function

 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 and counter2 uses a closure. Both are using functions that close off information within itself with {}.

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 would be preferable for having variables only available within the function and counter2 would be preferable for having a global variable.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(max){

  let score = Math.floor(Math.random() * Math.floor(max))
  console.log(score);
  return score;

}
console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numOfInn, inning){
  for (let i = 0; i < numOfInn; i++) {
    const teamOne = 'Home';
    const teamTwo = 'Away';
    let finalInn = Math.floor(Math.random() * 2);
    let lastInn = Math.floor(Math.random() * 2);
    console.log(`${teamOne} game scored ${finalInn}`);
    console.log(`${teamTwo} game scored ${lastInn}`);
  }
  return finalScore(`${teamOne}/'s final score is ${finalInn} while ${teamTwo}/'s final score is ${lastInn}`)
}
console.log(finalScore(9, inning));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

// function scoreboard(getInningScore, cbInning, iNumber) {
//   let awayTeam = 0;
//   let homeTeam = 0;
//   for (let i = 0; i < iNumber; i++){
//     cbInningScore = `${i} inning: ${awayTeam} awayTeam - ${homeTeam} homeTeam`;
//     console.log(cbInningScore);
//     awayTeam = awayTeam + cbInning();
//     homeTeam = homeTeam + cbInning();
//   }
// }

// scoreboard(getInningScore, inning, 9);
