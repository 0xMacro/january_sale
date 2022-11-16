const { expect } = require("chai")

describe("JanuarySaleItem contract", function () {

  let januarySaleItem, cheatingBidder, owner
  
  beforeEach(async function () {
    JanuarySaleItemFactory = await ethers.getContractFactory("JanuarySaleItem")
    ;[owner] = await ethers.getSigners()
    januarySaleItem = await JanuarySaleItemFactory.deploy()
    await januarySaleItem.deployed()
    FairBidderFactory = await ethers.getContractFactory("FairBidder")
    fairBidder = await FairBidderFactory.deploy()
    await fairBidder.deployed()
    CheatingBidderFactory = await ethers.getContractFactory("CheatingBidder")
    cheatingBidder = await CheatingBidderFactory.deploy()
    await cheatingBidder.deployed()
  })

  it("FairBidder can buy the item", async function () {
    await fairBidder.buyTheItem(januarySaleItem.address)
    expect(await januarySaleItem.isSold()).to.equal(true)
    expect(await januarySaleItem.owner()).to.equal(fairBidder.address)
  })

  it("CheatingBidder can steal the item", async function () {
    await cheatingBidder.stealTheItem(januarySaleItem.address)
    expect(await januarySaleItem.isSold()).to.equal(true)
    expect(await januarySaleItem.owner()).to.equal(cheatingBidder.address)
    expect(await januarySaleItem.soldFor()).to.equal(0)
  })
})
