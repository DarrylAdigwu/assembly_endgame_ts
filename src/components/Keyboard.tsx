import type { JSX } from "react";
import { clsx } from "clsx";

type KeyboardProps = {
  currentWord: string,
  guessedLetters: string[],
  alphabet: string,
  addGuess: (letter:string) => void
}

export default function Keyboard({ currentWord, guessedLetters, alphabet, addGuess}: KeyboardProps): JSX.Element {
  // Keyboard Element

  const keyElements: JSX.Element[] = alphabet.split("").map((letter: string): JSX.Element => {
    const isWrong: boolean = !currentWord.includes(letter) && guessedLetters.includes(letter)
    const isCorrect: boolean = currentWord.includes(letter) && guessedLetters.includes(letter)


    const keyColors: string = clsx({
      wrong: isWrong,
      right: isCorrect
    })

    return (
      <span key={letter} onClick={() => addGuess(letter)} className={`${keyColors} keyLetters`}>
        {letter.toUpperCase()}
      </span>
    )
  })

  return(
    <section className="keyboard">
      {keyElements}
    </section>
  )
}