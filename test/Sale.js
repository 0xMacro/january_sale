const { expect } = require("chai");

describe("Vulnerable JanuarySaleItem contract", function () {
  let januarySaleItem, cheatingBidder, owner;

  beforeEach(async function () {
    JanuarySaleItemFactory = await ethers.getContractFactory(
      "VulnerableJanuarySaleItem"
    );
    [owner] = await ethers.getSigners();
    januarySaleItem = await JanuarySaleItemFactory.deploy();
    await januarySaleItem.deployed();
    FairBidderFactory = await ethers.getContractFactory("FairBidder");
    fairBidder = await FairBidderFactory.deploy();
    await fairBidder.deployed();
    CheatingBidderFactory = await ethers.getContractFactory("CheatingBidder");
    cheatingBidder = await CheatingBidderFactory.deploy();
    await cheatingBidder.deployed();
  });

  it("FairBidder can buy the item", async function () {
    await fairBidder.buyTheItem(januarySaleItem.address);
    expect(await januarySaleItem.isSold()).to.equal(true);
    expect(await januarySaleItem.owner()).to.equal(fairBidder.address);
    expect(await januarySaleItem.soldFor()).to.equal(
      await januarySaleItem.reservePrice()
    );
  });

  it("CheatingBidder can steal the item", async function () {
    await cheatingBidder.stealTheItem(januarySaleItem.address);
    expect(await januarySaleItem.isSold()).to.equal(true);
    expect(await januarySaleItem.owner()).to.equal(cheatingBidder.address);
    expect(await januarySaleItem.soldFor()).to.equal(0);
  });
});

describe("Safe JanuarySaleItem contract", function () {
  let januarySaleItem, cheatingBidder, owner;

  beforeEach(async function () {
    JanuarySaleItemFactory = await ethers.getContractFactory(
      "SafeJanuarySaleItem"
    );
    [owner] = await ethers.getSigners();
    januarySaleItem = await JanuarySaleItemFactory.deploy();
    await januarySaleItem.deployed();
    FairBidderFactory = await ethers.getContractFactory("FairBidder");
    fairBidder = await FairBidderFactory.deploy();
    await fairBidder.deployed();
    CheatingBidderFactory = await ethers.getContractFactory("CheatingBidder");
    cheatingBidder = await CheatingBidderFactory.deploy();
    await cheatingBidder.deployed();
  });

  it("FairBidder can buy the item", async function () {
    await fairBidder.buyTheItem(januarySaleItem.address);
    expect(await januarySaleItem.isSold()).to.equal(true);
    expect(await januarySaleItem.owner()).to.equal(fairBidder.address);
    expect(await januarySaleItem.soldFor()).to.equal(
      await januarySaleItem.reservePrice()
    );
  });

  it("CheatingBidder can NOT steal the item", async function () {
    await cheatingBidder.stealTheItem(januarySaleItem.address);
    expect(await januarySaleItem.isSold()).to.equal(true);
    expect(await januarySaleItem.owner()).to.equal(cheatingBidder.address);
    expect(await januarySaleItem.soldFor()).to.equal(
      await januarySaleItem.reservePrice()
    );
  });
});
