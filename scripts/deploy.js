async function main() {
  const DeadMan = await ethers.getContractFactory("DeadMan");
  // Start deployment, returning a promise that resolves to a contract object
  const dead_man = await DeadMan.deploy("Dead Man");
  console.log("Contract deployed to address:", dead_man.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
