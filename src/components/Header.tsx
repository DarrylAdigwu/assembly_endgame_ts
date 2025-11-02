import type { JSX } from "react";

export default function Header(): JSX.Element {
  return(
    <div className="headline">
      <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the
          programming world safe from Assembly! 
        </p>
    </div>
  )
}