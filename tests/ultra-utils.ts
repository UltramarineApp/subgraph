import { newMockEvent } from "matchstick-as";
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts";
import { NewGame } from "../generated/Ultra/Ultra";

export function createNewGameEvent(
  num_: BigInt,
  game_: Address,
  name_: string,
  background1_: string,
  emoji1_: string,
  background2_: string,
  emoji2_: string
): NewGame {
  let newGameEvent = changetype<NewGame>(newMockEvent());

  newGameEvent.parameters = new Array();

  newGameEvent.parameters.push(
    new ethereum.EventParam("id_", ethereum.Value.fromUnsignedBigInt(id_))
  );
  newGameEvent.parameters.push(
    new ethereum.EventParam("game_", ethereum.Value.fromAddress(game_))
  );
  newGameEvent.parameters.push(
    new ethereum.EventParam("name_", ethereum.Value.fromString(name_))
  );
  newGameEvent.parameters.push(
    new ethereum.EventParam(
      "background1_",
      ethereum.Value.fromString(background1_)
    )
  );
  newGameEvent.parameters.push(
    new ethereum.EventParam("emoji1_", ethereum.Value.fromString(emoji1_))
  );
  newGameEvent.parameters.push(
    new ethereum.EventParam(
      "background2_",
      ethereum.Value.fromString(background2_)
    )
  );
  newGameEvent.parameters.push(
    new ethereum.EventParam("emoji2_", ethereum.Value.fromString(emoji2_))
  );

  return newGameEvent;
}
