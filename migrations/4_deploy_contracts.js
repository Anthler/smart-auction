var DeedRepository = require("../contracts/DeedRepository");
var AuctionRepository = require("../contracts/AuctionRepository");

module.exports = function(deployer) {
  deployer.deploy(DeedRepository);
  deployer.deploy(AuctionRepository);
};
