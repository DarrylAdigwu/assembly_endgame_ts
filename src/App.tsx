import { useState } from 'react'
import { languages } from './languages'
import { getRandomWord } from './utils'


import Header from './components/Header'
import ConfettiContainer from './components/ConfettiContainer'
import GameStatus from './components/GameStatus'
import AriaLiveStatus from './components/AriaLiveStatus'
import LanguageChips from './components/LanguageChips'
import WordLetters from './components/WordLetters'
import NewGameButton from './components/NewGameButton'
import Keyboard from './components/Keyboard'

function App() {
  const [currentWord, setCurrentWord] = useState<string>((): string => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  // Derived values and expressions
  const numGuessesLeft: number = languages.length - 1
  const wrongGuessCount: number = guessedLetters.filter((guess: string): boolean => !currentWord.includes(guess)).length
  const gameLost: boolean = wrongGuessCount >= numGuessesLeft;
  const gameWon: boolean = currentWord.split("").every((letter: string): boolean => guessedLetters.includes(letter))
  const gameOver: boolean = gameWon || gameLost
  const currentGuess: string = guessedLetters[guessedLetters.length - 1]
  const lastWrongGuess: boolean = !currentWord.includes(currentGuess)

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  // Adding keyboard inputs into guessedLetters
  function addGuess(letter: string): void {
    setGuessedLetters((prevLetters: string[]): string[] => {    
      return (
          prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
      )
    })
  }

  // Start new game
  function newGame(): void {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }
  
  return (
    <main>
        <ConfettiContainer 
          gameWon={gameWon}
        />
        <section className="message-container">
          <Header />
          <GameStatus 
            gameWon={gameWon}
            gameLost={gameLost}
            gameOver={gameOver}
            lastWrongGuess={lastWrongGuess}
            wrongGuessCount={wrongGuessCount}
          />
        </section>
        <LanguageChips 
          languages={languages}
          wrongGuessCount={wrongGuessCount}
        />
        <WordLetters 
          guessedLetters={guessedLetters}
          gameOver={gameOver}
          currentWord={currentWord}
        />
        <AriaLiveStatus
          currentWord={currentWord}
          guessedLetters={guessedLetters}
          numGuessesLeft={numGuessesLeft}
          currentGuess={currentGuess}
        />
        <Keyboard
          currentWord={currentWord}
          guessedLetters={guessedLetters}
          addGuess={addGuess}
          alphabet={alphabet}
        />
        <NewGameButton 
          gameOver={gameOver}
          newGame={newGame}
        />
    </main>
  )
}

export default App
