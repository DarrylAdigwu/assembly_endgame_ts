import type { JSX } from "react";

type NewGameButtonProps = {
  gameOver: boolean,
  newGame: () => void
}

export default function NewGameButton({gameOver, newGame}: NewGameButtonProps): JSX.Element | null {
  return (
    <>
      {
        gameOver ? 
        <button className="new-game" onClick={() => newGame()}>
          New Game
        </button> 
        : null
      }
    </>
  )
}