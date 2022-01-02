// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Bidder {
  function bidPrice() external view returns (uint);
}

contract JanuarySaleItem {
  uint public reservePrice = 100;
  uint public soldFor;
  bool public isSold;

  function buy() external {
    Bidder _bidder = Bidder(msg.sender);

    if (_bidder.bidPrice() >= reservePrice && !isSold) {
      isSold = true;
      soldFor = _bidder.bidPrice();
    }
  }
}
