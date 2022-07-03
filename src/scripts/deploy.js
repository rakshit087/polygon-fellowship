async function main() {

  const PriceConsumer = await ethers.getContractFactory("PriceConsumerV3");
  const priceConsumer = await PriceConsumer.deploy();
  await priceConsumer.deployed();
  const priceConsumerAddress = priceConsumer.address;

  const DINRToken = await ethers.getContractFactory("DINRToken");
  const dinrToken = await DINRToken.deploy();
  await dinrToken.deployed();
  const dinrTokenAddress = dinrToken.address;

  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy(dinrTokenAddress, priceConsumerAddress);
  await vault.deployed();
  const vaultAddress = vault.address;

  await dinrToken.transferOwnership(vaultAddress);

  console.log(`DINRToken address: ${dinrTokenAddress}`);
  console.log(`Vault address: ${vaultAddress}`);
  console.log(`PriceConsumer address: ${priceConsumerAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
