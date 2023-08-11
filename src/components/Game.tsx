import * as types from "../types"
import { classNames } from "../utils"
import Choice from "./Choice"

type RingsProps = {
  children: React.ReactNode
}

const Rings = ({ children }: RingsProps) => {
  return (
    <div className="sm:shadow-[0px_0px_0px_60px] shadow-[0px_0px_0px_15px] sm:shadow-white/5 shadow-white/5 rounded-full">
      <div className="sm:shadow-[0px_0px_0px_130px] shadow-[0px_0px_0px_45px] sm:shadow-white/5 shadow-white/5 rounded-full">
        <div className="sm:shadow-[0px_0px_0px_210px] shadow-[0px_0px_0px_75px] sm:shadow-white/5 shadow-white/5 rounded-full">
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
    <div className="mt-24 flex flex-col sm:items-center sm:justify-center">
      <div className="flex gap-16 items-center justify-center w-full">
        <div className="flex flex-col-reverse sm:flex-col gap-6 sm:gap-16">
          <h1 className="uppercase text-white text-sm sm:text-2xl tracking-widest text-center">
            you picked
          </h1>

          {result !== null && result === types.Result.player ? (
            <Rings>
              <Choice large choice={playerChoice} />
            </Rings>
          ) : houseChoice !== null ? (
            <Choice large choice={playerChoice} />
          ) : (
            <div className="animate-pulse-fast">
              <Choice large choice={playerChoice} />
            </div>
          )}
        </div>

        {result !== null && (
          <div className="hidden sm:flex flex-col gap-5 items-center justify-center mt-16">
            <h1 className="uppercase text-5xl text-white font-bold">
              {result === types.Result.player
                ? "you win"
                : result === types.Result.house
                ? "you lose"
                : "it's a tie"}
            </h1>
            <button
              className={classNames(
                "uppercase px-14 py-3 bg-white tracking-widest text-darkText rounded-lg shadow-md hover:brightness-75 transition-all",
                result === types.Result.house ? "hover:text-red-500" : ""
              )}
              onClick={resetGame}
            >
              play again
            </button>
          </div>
        )}

        <div className="flex flex-col-reverse sm:flex-col gap-6 sm:gap-16">
          <h1 className="uppercase text-white text-sm sm:text-2xl tracking-widest text-center">
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
            <div className="w-[130px] sm:w-[290px] h-[130px] sm:h-[290px] flex items-center justify-center animate-pulse-fast">
              <div className="rounded-full w-[100px] sm:w-[220px] h-[100px] sm:h-[220px] bg-[#172240]"></div>
            </div>
          )}
        </div>
      </div>

      {result !== null && (
        <div className="flex sm:hidden flex-col gap-5 items-center justify-center mt-20">
          <h1 className="uppercase text-5xl text-white font-bold">
            {result === types.Result.player
              ? "you win"
              : result === types.Result.house
              ? "you lose"
              : "it's a tie"}
          </h1>
          <button
            className="uppercase px-14 py-3 bg-white tracking-widest text-darkText rounded-lg shadow-md hover:brightness-75 transition-all"
            onClick={resetGame}
          >
            play again
          </button>
        </div>
      )}
    </div>
  )
}

export default Game
