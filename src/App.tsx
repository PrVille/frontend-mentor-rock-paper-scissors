import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Scoreboard from "./components/Scoreboard"
import Selection from "./components/Selection"
import Rules from "./components/Rules"
import { Choice, Result } from "./types"
import Game from "./components/Game"
import { determineResult } from "./utils"

const App = () => {
  const [score, setScore] = useState(0)
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null)
  const [houseChoice, setHouseChoice] = useState<Choice | null>(null)
  const [result, setResult] = useState<Result | null>(null)

  useEffect(() => {
    if (playerChoice) {
      const choices = Object.values(Choice)
      const houseChoice = choices[Math.floor(Math.random() * choices.length)]
      setTimeout(() => setHouseChoice(houseChoice), 3000)
    }
  }, [playerChoice])

  useEffect(() => {
    if (houseChoice && playerChoice) {
      const result = determineResult(playerChoice, houseChoice)
      setTimeout(() => {
        setResult(result)
        if (result === Result.player) {
          incrementScore()
        }
        if (result === Result.house) {
          decrementScore()
        }
      }, 1000)
    }
  }, [houseChoice, playerChoice])

  const incrementScore = () => {
    setScore((prevScore) => prevScore + 1)
  }

  const decrementScore = () => {
    setScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0))
  }

  const handleChoice = async (choice: Choice) => {
    setPlayerChoice(choice)
  }

  const resetGame = () => {
    setPlayerChoice(null)
    setHouseChoice(null)
    setResult(null)
  }

  return (
    <>
      <main className="min-h-screen w-full flex flex-col bg-gradient font-barlowSemiCondensed">
        <Scoreboard score={score} />
        {playerChoice ? (
          <Game
            playerChoice={playerChoice}
            houseChoice={houseChoice}
            result={result}
            resetGame={resetGame}
          />
        ) : (
          <Selection handleChoice={handleChoice} />
        )}

        <Rules />
      </main>
      <Footer />
    </>
  )
}

export default App
