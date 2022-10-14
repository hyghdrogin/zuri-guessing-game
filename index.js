let userName = prompt("Welcome to my Guessing Game, what can I call you?");
let pointCount = 0;

const guessCheck = (range) => {
  let level = range - 1;
  let pointCount = level + 1;
  let guess = parseInt(
    prompt(`Hi ${userName}. 
We have selected a random number between 1 and ${range}.
See if you can guess it in 2 turns or fewer.
We'll tell you if your guess was too high or too low.`)
  );
  let randomNumber = Math.floor(Math.random() * range) + 1;
  if (guess == randomNumber) {
    console.log("You guessed the right number");
    pointCount++;
    console.log(`Your point count is: ${pointCount}`);
    level++;
    console.log(`Welcome to Level ${level}`);
    range++;
  } else if (guess > randomNumber) {
    console.log("Your guess is too high");
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
        console.log("Keep Trying");
      };
    };
  } else if (guess < randomNumber) {
    console.log("Your guess is too low");
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
        console.log("Keep Trying");
      };
    };
  } else {
    console.log("Invalid Guess");
    console.log(`You remain in Level ${level}`);
  };
};
guessCheck(8);
