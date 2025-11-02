import type { JSX } from "react";
import clsx from "clsx";
import { getStatusText } from "../utils";
import { languages } from "../languages";

type GameStatusProps = {
  gameOver:boolean, 
  lastWrongGuess: boolean, 
  wrongGuessCount: number, 
  gameWon: boolean, 
  gameLost: boolean
}

export default function GameStatus(props: GameStatusProps): JSX.Element {
  // Get dynamic status messages
  const statusClassName: string = clsx("status", {
    notice: !props.gameOver && props.lastWrongGuess && props.wrongGuessCount > 0,
    correct: props.gameWon,
    incorrect: props.gameLost
  })

  // Function to render game status
  function status() {
    if(!props.gameOver && props.lastWrongGuess && props.wrongGuessCount > 0) {
      return(
        <p>
          {getStatusText(languages[props.wrongGuessCount - 1].name)}
        </p>
      )
    }

    if(props.gameWon){
      return (
        <>
          <h2>You Won!</h2>
          <p>Well done!</p>
        </>
        )
      }

    if(props.gameLost){
      return ( 
        <>
          <h2>Game Over!</h2>
          <p>You better start learning Assembly</p>
        </>
      )
    }
  }

  return(
    <div 
      className={statusClassName}
      aria-live="polite" 
      role="status"
    >
      {status()}
    </div>
  )
}