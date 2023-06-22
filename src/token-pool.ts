import {
  Deposit as DepositEvent,
  Withdrawal as WithdrawalEvent,
} from "../generated/TokenPool/TokenPool";
import { Deposit, Withdrawal } from "../generated/schema";

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(event.transaction.from.toHex());
  entity.from = event.params.from;
  entity.amount = event.params.amount;
  entity.compound = event.params.compound;
  entity.depositTime = event.params.depositTime;

  entity.save();
}
export function handleWithdrawal(event: WithdrawalEvent): void {
  let entity = new Withdrawal(event.transaction.from.toHex());
  entity.from = event.params.from;
  entity.amount = event.params.amount;
  entity.rewardAmount = event.params.rewardAmount;
  entity.withdrawTime = event.params.withdrawTime;

  entity.save();
}
