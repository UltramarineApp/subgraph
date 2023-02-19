import { NewGame as NewGameEvent } from "../generated/Ultra/Ultra";
import { NewGame } from "../generated/schema";

export function handleNewGame(event: NewGameEvent): void {
  let entity = new NewGame(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.num_ = event.params.id_;
  entity.game_ = event.params.game_;
  entity.name_ = event.params.name_;
  entity.background1_ = event.params.background1_;
  entity.emoji1_ = event.params.emoji1_;
  entity.background2_ = event.params.background2_;
  entity.emoji2_ = event.params.emoji2_;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
