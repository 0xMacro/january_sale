// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

interface ISaleItem {
    function reservePrice() external view returns (uint);
    function isSold() external view returns (bool);
    function buy() external;
}

contract CheatingBidder {

    function buyTheItem(address _saleItem) public {
    }

}
