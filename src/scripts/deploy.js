async function main() {
  const KueContract = await ethers.getContractFactory("KueContract");
  const kue_contract = await KueContract.deploy();
  console.log("Contract deployed to address:", kue_contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
