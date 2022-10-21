let userName = prompt("Welcome to my Guessing Game, what can I call you?");
let life;

const guessCheck = (range) => {
  let guess = parseInt(
    prompt(`Hi ${userName}. 
We have selected a random number between 1 and ${range}.
See if you can guess it in 2 turns or fewer.
We'll tell you if your guess was too high or too low.`)
  );
  let level = range - 1;
  let pointCount = level - 1;
  let randomNumber = Math.floor(Math.random() * range) + 1;
  if (guess == randomNumber) {
    console.log("You guessed the right number");
    level++;
    pointCount++;
    console.log(`Your point count is: ${pointCount}`);
    console.log(`Welcome to Level ${level}`);
    range++;
  } else if (guess > randomNumber) {
    console.log("Your guess is too high");
    life = 2;
    life--;
    console.log(`You have ${life} life left`);
    console.log(`You remain in Level ${level}`);
    if (guess !== randomNumber) {
      let guess = parseInt(prompt("Try Again"));
      if (guess == randomNumber) {
        console.log("You guessed the right number");
        pointCount++;
        console.log(`Your point count is: ${pointCount}`);
        level++;
        console.log(`Welcome to Level ${level}`);
        range++;
      } else {
        console.log("Restart Level");
      };
    };
  } else if (guess < randomNumber) {
    console.log("Your guess is too low");
    life = 2;
    life--;
    console.log(`You have ${life} life left`);
    console.log(`You remain in Level ${level}`);
    if (guess !== randomNumber) {
      let guess = parseInt(prompt("Try Again"));
      if (guess == randomNumber) {
        console.log("You guessed the right number");
        pointCount++;
        console.log(`Your point count is: ${pointCount}`);
        level++;
        console.log(`Welcome to Level ${level}`);
        range++;
      } else {
        console.log("Restart Level");
      };
    };
  } else {
    console.log("Invalid Guess");
    console.log(`You remain in Level ${level}`);
  };
  if (range++) {
    range -= 1;
    console.log("----------------------------------------")
    guessCheck(range);
  } else {
    console.log("Restart Level")
  }
};
guessCheck(2);

// for (let range = 2; range > 1; range++) {
//   guessCheck(range);
// }