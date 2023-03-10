const main = async () => {
  
  const Transactions = await hre.ethers.getContractFactory("Transactions"); // this is like a class thats gonna generate instances of the specific contract
  const transactions = await Transactions.deploy(); // An instance of the contract

  await transactions.deployed();

  console.log("Transactions deployed to: ", transactions.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();