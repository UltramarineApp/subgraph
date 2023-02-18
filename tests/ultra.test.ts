import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { NewGame } from "../generated/schema"
import { NewGame as NewGameEvent } from "../generated/Ultra/Ultra"
import { handleNewGame } from "../src/ultra"
import { createNewGameEvent } from "./ultra-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let id_ = BigInt.fromI32(234)
    let game_ = Address.fromString("0x0000000000000000000000000000000000000001")
    let name_ = "Example string value"
    let background1_ = "Example string value"
    let emoji1_ = "Example string value"
    let background2_ = "Example string value"
    let emoji2_ = "Example string value"
    let newNewGameEvent = createNewGameEvent(
      id_,
      game_,
      name_,
      background1_,
      emoji1_,
      background2_,
      emoji2_
    )
    handleNewGame(newNewGameEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewGame created and stored", () => {
    assert.entityCount("NewGame", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "id_",
      "234"
    )
    assert.fieldEquals(
      "NewGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "game_",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "NewGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name_",
      "Example string value"
    )
    assert.fieldEquals(
      "NewGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "background1_",
      "Example string value"
    )
    assert.fieldEquals(
      "NewGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "emoji1_",
      "Example string value"
    )
    assert.fieldEquals(
      "NewGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "background2_",
      "Example string value"
    )
    assert.fieldEquals(
      "NewGame",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "emoji2_",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
