// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

interface Bidder {
    function bidPrice() external view returns (uint);
}

contract SafeJanuarySaleItem {
    uint public reservePrice = 100;
    uint public soldFor;
    bool public isSold;
    address public owner;

    function buy() external {
        Bidder _bidder = Bidder(msg.sender);

        if (_bidder.bidPrice() >= reservePrice && !isSold) {
            isSold = true;
            soldFor = _bidder.bidPrice();
            owner = address(_bidder);
        }
    }
}
