import { useState } from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */
const MAX_NUMBER = 100;
const MIN_NUMBER = 0;

const getRandomNumber = () => {
  return Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
};

const MAX_ATTEMPTS = 5;

const NumberGuessingGame = () => {
  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [latestGuess, setLatestGuess] = useState(null);

  const isCorrectGuess = latestGuess === numberToGuess;
  
  const isGameOver =
    isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS;

  const handleGuess = (guess) => {
    setLatestGuess(guess);
    let newNumberOfGuesses = numberOfGuesses + 1;
    setNumberOfGuesses(newNumberOfGuesses);
  };
  
  const handleReset = () => {
    setNumberToGuess(getRandomNumber);
    setNumberOfGuesses(0);
    setLatestGuess(null);
  };

  return (
    <div>
      <h2>I&apos;m thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  );
};

export default NumberGuessingGame;
