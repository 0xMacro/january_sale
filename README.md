# january_sale
Contracts and test for the January sale toy problem.

### To use:

1. `git clone https://github.com/0xMacro/january_sale.git`
2. `cd january_sale`
3. `npm install`
4. `npx hardhat test`

The challenge is to get the test to pass by editing `contracts/FairBidder.sol` (for the first test) and `contracts/CheatingBidder.sol` (for the second test), without making any changes to `contracts/JanuarySaleItem.sol` or `test/Sale.js`

The first test just checks the the FairBidder contract can buy the sale item, which is easily done by bidding the reserve price or higher.

The second test requires the CheatingBidder to exploit a vulnerability in order to buy the sale item at a price of zero. 
