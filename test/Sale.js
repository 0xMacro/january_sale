const { expect } = require("chai")

describe("JanuarySaleItem contract", function () {

  let januarySaleItem, cheatingBidder, owner
  
  beforeEach(async function () {
    JanuarySaleItemFactory = await ethers.getContractFactory("JanuarySaleItem")
    ;[owner] = await ethers.getSigners()
    januarySaleItem = await JanuarySaleItemFactory.deploy()
    await januarySaleItem.deployed()
    CheatingBidderFactory = await ethers.getContractFactory("CheatingBidder")
    cheatingBidder = await CheatingBidderFactory.deploy()
    await cheatingBidder.deployed()
  })

  it("can be bought", async function () {
    await cheatingBidder.buyTheItem(januarySaleItem.address)
    expect(await januarySaleItem.isSold()).to.equal(true)
    expect(await januarySaleItem.owner()).to.equal(cheatingBidder.address)
  })

  it("can be bought for nothing", async function () {
    await cheatingBidder.buyTheItem(januarySaleItem.address)
    expect(await januarySaleItem.isSold()).to.equal(true)
    expect(await januarySaleItem.owner()).to.equal(cheatingBidder.address)
    expect(await januarySaleItem.soldFor()).to.equal(0)
  })
})
