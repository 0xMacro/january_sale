// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

abstract contract ISaleItem {
    function reservePrice() external virtual view returns (uint);
    function isSold() external view virtual returns (bool);
    function buy() external virtual ;
}

contract CheatingBidder {

    function cheat(address _saleItem) public {
    }

}

