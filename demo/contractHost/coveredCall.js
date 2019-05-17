/* global E */
// Copyright (C) 2019 Agoric, under Apache License 2.0

import harden from '@agoric/harden';

import { escrowExchange } from './escrow';

function coveredCall(terms, chitMaker) {
  const [moneyNeeded, stockNeeded, timerPresence, deadline] = terms;

  const [aliceChit, bobChit] = escrowExchange(
    [moneyNeeded, stockNeeded],
    chitMaker,
  );

  const aliceEscrowSeat = chitMaker.redeem(aliceChit);
  const bobEscrowSeat = chitMaker.redeem(bobChit);

  // Seats

  E(timerPresence)
    .delayUntil(deadline)
    .then(_ => bobEscrowSeat.cancel('expired'));

  const bobSeat = harden({
    offer(stockPayment) {
      const sIssuer = stockNeeded.label.issuer;
      return E(sIssuer)
        .getExclusive(stockNeeded, stockPayment, 'prePay')
        .then(prePayment => {
          bobEscrowSeat.offer(prePayment);
          return chitMaker.make(
            ['holder', moneyNeeded, stockNeeded],
            aliceEscrowSeat,
          );
        });
    },
    getWinnings: bobEscrowSeat.getWinnings,
    getRefund: bobEscrowSeat.getRefund,
  });

  return chitMaker.make(['writer', stockNeeded, moneyNeeded], bobSeat);
}

const coveredCallSrc = `\
(function() {
  ${escrowExchange}
  return (${coveredCall});
}())`;

export { coveredCall, coveredCallSrc };