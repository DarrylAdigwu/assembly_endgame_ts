import type { JSX } from "react";

type WordLettersProps = {
  gameOver: boolean,
  guessedLetters: string[],
  currentWord: string
}

export default function WordLetters({gameOver, guessedLetters, currentWord}: WordLettersProps): JSX.Element {

    // Display full word on page
    const letterElements: JSX.Element[] = currentWord.split("").map((letter: string, index: number): JSX.Element => {

      const correctGuess: string[] = guessedLetters.filter((guess: string) => currentWord.includes(guess))
      
      return (
        <span key={index}>
          {correctGuess.includes(letter) ? letter.toUpperCase() : ""}
        </span>
      )
    })

    // Show missed letters in word
    const missedLetters: (JSX.Element | undefined)[] = currentWord.split("").map((letter: string, index: number): JSX.Element => {
      if(!guessedLetters.includes(letter)) {
          return(
            <span key={index} style={{color: "#EC5D49"}}>
                {letter.toUpperCase()}
            </span>
          )
            
      } else {
          return (
            <span key={index}>
                {letter.toUpperCase()}
            </span>
          )
      }
    })

  return(
    <section className="word">
      {gameOver ? missedLetters : letterElements}
    </section>
  )
}