var numCorrectGuessesNeededToWin = 2;
var numCorrectGuessesSoFar = 0;

// Randomly return one of banana, chisel or faucet.
var generateSecretWord = function () {
  // Generate random number between 1 and 3
  var numPossibleWords = 3;
  var randomNum = Math.floor(Math.random() * numPossibleWords) + 1;

  // Return the word that corresponds to the relevant number
  if (randomNum == 1) {
    return `banana`;
  }
  if (randomNum == 2) {
    return `chisel`;
  }
  return `faucet`;
};

var secretWordBaseMain = function (guessedWord) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;
  if (secretWord == guessedWord) {
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed twice correctly. You win! Please play again.`;
    }
    return `${standardMessage} You guessed correctly. You win! Please play again.`;
  }
  var numCorrectGuessesRemainingToWin =
    numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesNeededToWin} more correct guesses to win.`;
};

// Secret Word Twice in a Row

var secretWordTwiceRowMain = function (guessedWord) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;

  // Guess is correct
  if (secretWord == guessedWord) {
    numCorrectGuessesSoFar += 1;

    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed correctly ${numCorrectGuessesNeededToWin} times in a row. You win! Please play again.`;
    }

    var numCorrectGuessesRemainingToWin =
      numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;

    return `${standardMessage} You guessed correct! You need ${numCorrectGuessesRemainingToWin} more correct guess to win.`;
  }
  // Guess is incorrect
  // Reset counter of correct guesses to 0 to implement twice in a row rule.
  numCorrectGuessesSoFar = 0;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesNeededToWin} more correct guesses to win.`;
};

// Secret word X in a Row

// Initialise isStartofRound to true to generate numCorrectGuessesNeededToWin
var isStartOfRound = true;

// Generate random number between 2 and 4
var generateNumCorrectGuessThreshold = function () {
  return Math.floor(Math.random() * 3) + 2;
};

var secretWordXRowMain = function (guessedWord) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.

  // If start of round, re-generate num correct guesses needed to win.
  if (isStartOfRound) {
    numCorrectGuessesNeededToWin = generateNumCorrectGuessThreshold();
    // Set isStartOfRound to false until start of next round.
    isStartOfRound = false;
  }

  // Generate secret world without repeats
  var secretWord = generateSecretWord();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}. `;

  // Guess is correct
  if (secretWord == guessedWord) {
    // Use numCorrectGuessesSoFar and numCorrectGuessesNeededToWin variables from prev exercise.
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      // Reset isStartOfRound to true to generate new num correct guesses threshold the next round.
      isStartOfRound = true;
      return `${standardMessage} You guessed correctly ${numCorrectGuessesNeededToWin} times in a row. You win! Please play again.`;
    }
    var numCorrectGuessesRemainingToWin =
      numCorrectGuessesNeededToWin - numCorrectGuessesSoFar;
    return `${standardMessage} You guessed correctly! You need ${numCorrectGuessesRemainingToWin} more correct guess to win.`;
  }

  // Guess is incorrect
  // Reset counter of correct guesses to 0 to implement X in a row rule.
  numCorrectGuessesSoFar = 0;
  return `${standardMessage} You guessed incorrectly. You need ${numCorrectGuessesNeededToWin} more correct guesses to win.`;
};

/* 
Generate Comfortable Dice Within
 */

/**
 * More Comfortable: Dice Within
 */

// Store within number as global to persist across guesses.
var withinNum;

var rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// Generate number from 1 to 3
var generateWithinNum = function () {
  return Math.floor(Math.random() * 3) + 1;
};

var diceWithinMain = function (playerGuess) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.

  // Use isStartOfRound variable from previous secret word exercise
  if (isStartOfRound) {
    withinNum = generateWithinNum();
    isStartOfRound = false;
  }
  var diceRoll = rollDice();
  var standardMessage = `Your guess: ${playerGuess}. Dice roll: ${diceRoll}. Within number: ${withinNum}.`;

  if (
    playerGuess <= diceRoll + withinNum &&
    playerGuess >= diceRoll - withinNum
  ) {
    isStartOfRound = true;
    return `${standardMessage} You win!`;
  }
  return `${standardMessage} You lose.`;
};

/**
 * More Comfortable: Dice Within with 2 Dice
 */

var determineIsWithinRange = function (guess, diceRoll) {
  return guess >= diceRoll - withinNum && guess <= diceRoll + withinNum;
};

// Determine if the guess is within the range of either dice rolls 1 or 2
var determineWin = function (guess, diceRoll1, diceRoll2) {
  return (
    determineIsWithinRange(guess, diceRoll1) ||
    determineIsWithinRange(guess, diceRoll2)
  );
};

var diceWithin2DiceMain = function (playerGuess) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.

  // Use isStartOfRound variable from previous Secret Word exercise
  if (isStartOfRound) {
    // Use withinNum variable from previous Dice Within exercise
    withinNum = generateWithinNum();
    isStartOfRound = false;
  }
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var standardMessage = `Your guess: ${playerGuess}. Dice roll 1: ${diceRoll1}. Dice roll 2: ${diceRoll2}. Within number: ${withinNum}.`;

  if (determineWin(playerGuess, diceRoll1, diceRoll2)) {
    isStartOfRound = true;
    return `${standardMessage} You win!`;
  }
  return `${standardMessage} You lose.`;
};

/**
 * More Comfortable: Dice 4D
 */

var is4dTime = false;
var numWins = 0;

var play4d = function (playerGuess) {
  var fourDNum = Math.floor(Math.random() * 10000);
  var outputMessage = `Your guess: ${playerGuess}. 4D number: ${fourDNum}.`;
  if (playerGuess == fourDNum) {
    outputMessage += " You won 4D! Congratulations!";
  } else {
    outputMessage += " You did not win 4D.";
  }
  return `${outputMessage} Please enter a dice roll guess. To play 4D again, please play and win the dice game twice.`;
};

var dice4DMain = function (playerGuess) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.

  // Play 4D if it's 4D time
  if (is4dTime) {
    is4dTime = false;
    return play4d(playerGuess);
  }

  // Generate new within number if it's the start of a dice round.
  // Use isStartOfRound variable from previous Secret Word exercise
  if (isStartOfRound) {
    // Use withinNum variable from previous Dice Within exercise
    withinNum = generateWithinNum();
    isStartOfRound = false;
  }

  // Generate dice numbers
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  var standardMessage = `Your guess: ${playerGuess}. Dice roll 1: ${diceRoll1}. Dice roll 2: ${diceRoll2}. Within number: ${withinNum}.`;

  // If the player wins, return the appropriate message.
  if (determineWin(playerGuess, diceRoll1, diceRoll2)) {
    isStartOfRound = true;
    // Keep track of number of wins such that the user can play 4D every 2 wins.
    numWins += 1;
    if (numWins >= 2) {
      // Reset number of wins every 2 wins.
      numWins = 0;
      // Set is4dTime to true so player can play 4D at next round.
      is4dTime = true;
      return `${standardMessage} You've won twice! Time to play 4D! Enter your 4D guess.`;
    }
    return `${standardMessage} You win! 1 more win to play 4D!`;
  }

  // Player loses. Output number of wins left to play 4D.
  var numWinsRemainingToPlay4d = 2 - numWins;
  return `${standardMessage} You lose. You need ${numWinsRemainingToPlay4d} more wins to play 4D.`;
};

/**
 * More Comfortable: Secret Word Twice in a Row 2
 */

var prevSecretWord = "";

// Randomly return banana, chisel or faucet without repeating words across consecutive guesses.
var generateSecretWordNoRepeats = function () {
  var secretWord = prevSecretWord;
  // Keep generating secret words until we get a different word
  // "While" Creates a loop that repeats itself as long as a given condition is true (the condition being assessed is that which is in the parenthesis).
  while (secretWord == prevSecretWord) {
    // Use generateSecretWord function from previous exercise
    secretWord = generateSecretWord();
  }
  // Keep track of the current secret word as prevSecretWord in the next guess.
  prevSecretWord = secretWord;
  return secretWord;
};

var secretWordTwice2Main = function (guessedWord) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var secretWord = generateSecretWordNoRepeats();
  var standardMessage = `You guessed: ${guessedWord}. Secret word: ${secretWord}.`;
  if (secretWord == guessedWord) {
    // Use numCorrectGuessesSoFar and numCorrectGuessesNeededToWin variables from prev exercise.
    numCorrectGuessesSoFar += 1;
    if (numCorrectGuessesSoFar >= numCorrectGuessesNeededToWin) {
      // Reset counter of correct guesses to restart game.
      numCorrectGuessesSoFar = 0;
      return `${standardMessage} You guessed correctly twice in a row. You win! Please play again.`;
    }
    return `${standardMessage} You guessed correctly! You need 1 more correct guess to win.`;
  }
  // Reset counter of correct guesses to 0 to implement 2 in a row rule.
  numCorrectGuessesSoFar = 0;
  return `${standardMessage} You guessed incorrectly. You need 2 more correct guesses to win.`;
};
