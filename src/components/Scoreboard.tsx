import logoBonus from "../../images/logo-bonus.svg"

type ScoreboardProps = {
  score: number
}

const Scoreboard = ({ score }: ScoreboardProps) => {
  return (
    <div className="inline-block border-2 sm:border-4 border-headerOutline rounded-lg sm:rounded-2xl p-2 sm:p-4 mx-7 sm:mx-auto mt-8 sm:mt-10">
      <div className="relative max-w-screen-sm sm:w-screen flex justify-between">
        <div className="ml-3 flex sm:hidden items-center">
          <img src={logoBonus} width={"45%"} />
        </div>

        <div className="ml-2 hidden sm:block">
          <img src={logoBonus} width={"100%"} />
        </div>

        <div className="bg-white rounded-md sm:rounded-lg text-center flex flex-col items-center justify-center py-2 sm:py-0 px-6 sm:px-12">
          <h6 className="uppercase tracking-widest text-scoreText text-[10px] sm:text-base">
            score
          </h6>
          <span className="text-4xl sm:text-5xl font-bold text-darkText">
            {score}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
