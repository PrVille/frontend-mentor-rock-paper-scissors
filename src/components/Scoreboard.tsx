import logoBonus from "../../images/logo-bonus.svg"

type ScoreboardProps = {
  score: number
}

const Scoreboard = ({ score }: ScoreboardProps) => {
  return (
    <div className="inline-block border-4 border-headerOutline rounded-2xl px-4 py-4 mx-auto mt-10">
      <div className="max-w-screen-sm w-screen flex justify-between">
        <img src={logoBonus} className="ml-2" />

        <div className="bg-white rounded-lg text-center flex flex-col items-center justify-center px-12">
          <h6 className="uppercase tracking-widest text-scoreText">score</h6>
          <span className="text-5xl text-darkText">{score}</span>
        </div>
      </div>
    </div>
  )
}

export default Scoreboard
