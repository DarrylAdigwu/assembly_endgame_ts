import type { JSX } from "react";
import Confetti from "react-confetti";

export default function ConfettiContainer({ gameWon }: {gameWon: boolean}): JSX.Element | null {
  if(!gameWon) {
    return null;
  } else {
    return(
      <Confetti
        recycle={false}
        numberOfPieces={1000}
      />
    )
  }
}