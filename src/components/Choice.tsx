import iconScissors from "../../images/icon-scissors.svg"
import iconPaper from "../../images/icon-paper.svg"
import iconLizard from "../../images/icon-lizard.svg"
import iconRock from "../../images/icon-rock.svg"
import iconSpock from "../../images/icon-spock.svg"
import { classNames } from "../utils"
import * as types from "../types"

type ChoiceProps = {
  large?: boolean
  choice: types.Choice
}

const colorMap = {
  [types.Choice.scissors]:
    "from-scissorsGradientFrom to-scissorsGradientTo sm:shadow-[#c86c19] shadow-[#c86c19]",
  [types.Choice.rock]:
    "from-rockGradientFrom to-rockGradientTo sm:shadow-[#a01632] shadow-[#a01632]",
  [types.Choice.paper]:
    "from-paperGradientFrom to-paperGradientTo sm:shadow-[#2943c3] shadow-[#2943c3]",
  [types.Choice.lizard]:
    "from-lizardGradientFrom to-lizardGradientTo sm:shadow-[#6136ae] shadow-[#6136ae]",
  [types.Choice.spock]:
    "from-spockGradientFrom to-spockGradientTo sm:shadow-[#2e8fab] shadow-[#2e8fab]",
}

const imageMap = {
  [types.Choice.scissors]: iconScissors,
  [types.Choice.rock]: iconRock,
  [types.Choice.paper]: iconPaper,
  [types.Choice.lizard]: iconLizard,
  [types.Choice.spock]: iconSpock,
}

const Choice = ({ choice, large = false }: ChoiceProps) => {
  return (
    <div
      className={classNames(
        "relative bg-gradient-to-t rounded-full flex items-center justify-center",
        colorMap[choice],
        large
          ? "w-[130px] sm:w-[290px] h-[130px] sm:h-[290px] shadow-[0px_6px_0px_0px] sm:shadow-[0px_12px_0px_0px]"
          : "w-[145px] h-[145px] shadow-[0px_6px_0px_0px]"
      )}
    >
      <span
        className={classNames(
          "absolute bg-white rounded-full shadow-black/20 sm:shadow-black/20",
          large
            ? "w-[100px] sm:w-[220px] h-[100px] sm:h-[220px] shadow-[inset_0px_4px_0px_0px] sm:shadow-[inset_0px_10px_0px_0px]"
            : "w-[110px] h-[110px] shadow-[inset_0px_4px_0px_0px]"
        )}
      />
      <img src={imageMap[choice]} className="z-10 absolute w-1/3" />
    </div>
  )
}

export default Choice
