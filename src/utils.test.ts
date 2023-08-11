import { Choice, Result } from "./types"
import { determineResult } from "./utils"

describe("determineResult function", () => {
  describe("should win", () => {
    it("player wins with rock against scissors", () => {
      expect(determineResult(Choice.rock, Choice.scissors)).toBe(Result.player)
    })

    it("player wins with rock against lizard", () => {
      expect(determineResult(Choice.rock, Choice.lizard)).toBe(Result.player)
    })

    it("player wins with paper against rock", () => {
      expect(determineResult(Choice.paper, Choice.rock)).toBe(Result.player)
    })

    it("player wins with paper against spock", () => {
      expect(determineResult(Choice.paper, Choice.spock)).toBe(Result.player)
    })

    it("player wins with scissors against paper", () => {
      expect(determineResult(Choice.scissors, Choice.paper)).toBe(Result.player)
    })

    it("player wins with scissors against lizard", () => {
      expect(determineResult(Choice.scissors, Choice.lizard)).toBe(
        Result.player
      )
    })

    it("player wins with lizard against spock", () => {
      expect(determineResult(Choice.lizard, Choice.spock)).toBe(Result.player)
    })

    it("player wins with lizard against paper", () => {
      expect(determineResult(Choice.lizard, Choice.paper)).toBe(Result.player)
    })

    it("player wins with spock against scissors", () => {
      expect(determineResult(Choice.spock, Choice.scissors)).toBe(Result.player)
    })

    it("player wins with spock against rock", () => {
      expect(determineResult(Choice.spock, Choice.rock)).toBe(Result.player)
    })
  })

  describe("should lose", () => {
    it("player loses with rock against paper", () => {
      expect(determineResult(Choice.rock, Choice.paper)).toBe(Result.house)
    })

    it("player loses with rock against spock", () => {
      expect(determineResult(Choice.rock, Choice.spock)).toBe(Result.house)
    })

    it("player loses with paper against scissors", () => {
      expect(determineResult(Choice.paper, Choice.scissors)).toBe(Result.house)
    })

    it("player loses with paper against lizard", () => {
      expect(determineResult(Choice.paper, Choice.lizard)).toBe(Result.house)
    })

    it("player loses with scissors against rock", () => {
      expect(determineResult(Choice.scissors, Choice.rock)).toBe(Result.house)
    })

    it("player loses with scissors against spock", () => {
      expect(determineResult(Choice.scissors, Choice.spock)).toBe(Result.house)
    })

    it("player loses with lizard against rock", () => {
      expect(determineResult(Choice.lizard, Choice.rock)).toBe(Result.house)
    })

    it("player loses with lizard against scissors", () => {
      expect(determineResult(Choice.lizard, Choice.scissors)).toBe(Result.house)
    })

    it("player loses with spock against paper", () => {
      expect(determineResult(Choice.spock, Choice.paper)).toBe(Result.house)
    })

    it("player loses with spock against lizard", () => {
      expect(determineResult(Choice.spock, Choice.lizard)).toBe(Result.house)
    })
  })

  describe("should tie", () => {
    it("player ties with rock against rock", () => {
      expect(determineResult(Choice.rock, Choice.rock)).toBe(Result.tie)
    })

    it("player ties with paper against paper", () => {
      expect(determineResult(Choice.paper, Choice.paper)).toBe(Result.tie)
    })

    it("player ties with scissors against scissors", () => {
      expect(determineResult(Choice.scissors, Choice.scissors)).toBe(Result.tie)
    })

    it("player ties with lizard against lizard", () => {
      expect(determineResult(Choice.lizard, Choice.lizard)).toBe(Result.tie)
    })

    it("player ties with spock against spock", () => {
      expect(determineResult(Choice.spock, Choice.spock)).toBe(Result.tie)
    })
  })
})
