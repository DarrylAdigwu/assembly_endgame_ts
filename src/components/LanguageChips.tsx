import type { JSX } from "react";
import type {Language} from "../languages";

type LanguageChipsProps = {
  languages: Language[],
  wrongGuessCount: number
}
export default function LanguageChips({languages, wrongGuessCount}: LanguageChipsProps): JSX.Element {
  // Create language chips
    const languageList: JSX.Element[] = languages.map((language: Language, index: number): JSX.Element => {
  
      // Checks wrong guesses to change language chips
      const eliminated: string = wrongGuessCount > index ? "0.1" : "1"
      
      const styles: Omit<Language, "name"> = {
        backgroundColor: `${language.backgroundColor}`,
        color: `${language.color}`,
        opacity: `${eliminated}`
      }
  
      return (
        <span key={index} style={styles}>
          {language.name}
        </span>
      )
    })

  return(
    <section className="languages">
      {languageList}
    </section>
  )
}