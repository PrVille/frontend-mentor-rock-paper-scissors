import { Choice, Result } from "./types"

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ")
}

export const determineResult = (player: Choice, house: Choice): Result => {
  if (player === house) return Result.tie
  if (
    (player === Choice.rock &&
      (house === Choice.scissors || house === Choice.lizard)) ||
    (player === Choice.paper &&
      (house === Choice.rock || house === Choice.spock)) ||
    (player === Choice.scissors &&
      (house === Choice.paper || house === Choice.lizard)) ||
    (player === Choice.lizard &&
      (house === Choice.spock || house === Choice.paper)) ||
    (player === Choice.spock &&
      (house === Choice.scissors || house === Choice.rock))
  ) {
    return Result.player
  } else {
    return Result.house
  }
}
