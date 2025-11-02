import type { JSX } from "react";

type AriaLiveStatusProps = {
  currentGuess: string,
  numGuessesLeft: number,
  currentWord: string,
  guessedLetters: string[]
}

export default function AriaLiveStatus({
                                          currentGuess,
                                          numGuessesLeft,
                                          currentWord,
                                          guessedLetters
                                      }: AriaLiveStatusProps): JSX.Element {
  
  return(
    <section 
      className="sr-only" 
      aria-live="polite" 
      role="status"
    >
      {/* Combined visually-hidden aria-live region for status updates */}
      <p>
          {currentWord.includes(currentGuess) ? 
              `Correct! The letter ${currentGuess} is in the word.` : 
              `Sorry, the letter ${currentGuess} is not in the word.`
          }
          You have {numGuessesLeft} attempts left.
      </p>
      <p>
        Current word: 
        {
          currentWord.split("").map((letter: string): string => guessedLetters.includes(letter) ?
          letter + "." 
          : "blank.").join(" ")
        }
      </p>
    </section>
  )
}