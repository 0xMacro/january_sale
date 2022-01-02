// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "hardhat/console.sol";

abstract contract ISaleItem {
    function reservePrice() external view virtual returns (uint);
    function isSold() external view virtual returns (bool);
    function buy() external virtual ;
}

contract CheatingBidder {
    ISaleItem private saleItem;

    function cheat(address _saleItem) public {
        saleItem = ISaleItem(_saleItem);
        console.log("sale item ...");
        saleItem.buy();
        console.log("... sale item");
    }

    function bidPrice() external view returns (uint256) {
        return saleItem.isSold() ? 0 : 100;
    }
}
