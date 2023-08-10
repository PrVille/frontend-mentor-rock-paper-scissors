import bgPentagon from "../../images/bg-pentagon.svg"
import * as types from "../types"
import Choice from "./Choice"

type SelectionProps = {
  handleChoice: (choice: types.Choice) => Promise<void>
}

const Selection = ({ handleChoice }: SelectionProps) => {
  return (
    <div className="relative mx-auto my-auto inline-flex items-center justify-center">
      <img src={bgPentagon} />
      <button
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:brightness-75 transition-all"
        onClick={() => handleChoice(types.Choice.scissors)}
      >
        <Choice choice={types.Choice.scissors} />
      </button>
      <button
        className="absolute top-1/3 right-0 translate-x-1/2 -translate-y-1/3 hover:brightness-75 transition-all"
        onClick={() => handleChoice(types.Choice.paper)}
      >
        <Choice choice={types.Choice.paper} />
      </button>
      <button
        className="absolute top-1/3 left-0 -translate-x-1/2 -translate-y-1/3 hover:brightness-75 transition-all"
        onClick={() => handleChoice(types.Choice.spock)}
      >
        <Choice choice={types.Choice.spock} />
      </button>
      <button
        className="absolute bottom-0 left-0 translate-y-1/2 hover:brightness-75 transition-all"
        onClick={() => handleChoice(types.Choice.lizard)}
      >
        <Choice choice={types.Choice.lizard} />
      </button>
      <button
        className="absolute bottom-0 right-0 translate-y-1/2 hover:brightness-75 transition-all"
        onClick={() => handleChoice(types.Choice.rock)}
      >
        <Choice choice={types.Choice.rock} />
      </button>
    </div>
  )
}

export default Selection
