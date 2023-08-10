import * as types from "../types"
import Choice from "./Choice"

type RingsProps = {
  children: React.ReactNode
}

const Rings = ({ children }: RingsProps) => {
  return (
    <div className="shadow-[0px_0px_0px_60px] shadow-white/5 rounded-full">
      <div className="shadow-[0px_0px_0px_130px] shadow-white/5 rounded-full">
        <div className="shadow-[0px_0px_0px_210px] shadow-white/5 rounded-full">
          {children}
        </div>
      </div>
    </div>
  )
}

type GameProps = {
  playerChoice: types.Choice
  houseChoice: types.Choice | null
  result: types.Result | null
  resetGame: () => void
}

const Game = ({ playerChoice, houseChoice, result, resetGame }: GameProps) => {
  return (
    <div className="m-auto flex items-center justify-center">
      <div className="flex gap-16">
        <div className="flex flex-col gap-16">
          <h1 className="uppercase text-white text-2xl tracking-widest text-center">
            you picked
          </h1>

          {result !== null && result === types.Result.player ? (
            <Rings>
              <Choice large choice={playerChoice} />
            </Rings>
          ) : (
            <Choice large choice={playerChoice} />
          )}
        </div>

        {result !== null && (
          <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="uppercase text-5xl text-white">
              {result === types.Result.player
                ? "you win"
                : result === types.Result.house
                ? "you lose"
                : "it's a tie"}
            </h1>
            <button
              className="uppercase px-10 py-3 bg-white tracking-widest text-darkText rounded-lg shadow-md"
              onClick={resetGame}
            >
              play again
            </button>
          </div>
        )}

        <div className="flex flex-col gap-16">
          <h1 className="uppercase text-white text-2xl tracking-widest text-center">
            the house picked
          </h1>

          {houseChoice !== null &&
          result !== null &&
          result === types.Result.house ? (
            <Rings>
              <Choice large choice={houseChoice} />
            </Rings>
          ) : houseChoice !== null ? (
            <Choice large choice={houseChoice} />
          ) : (
            <div className="w-[290px] h-[290px] flex items-center justify-center animate-pulse">
              <div className="rounded-full w-[220px] h-[220px] bg-[#172240]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Game
