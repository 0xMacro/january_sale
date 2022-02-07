// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

interface ISaleItem {
    function reservePrice() external view returns (uint);
    function isSold() external view returns (bool);
    function buy() external;
}

contract CheatingBidder {

    function cheat(address _saleItem) public {
    }

}
