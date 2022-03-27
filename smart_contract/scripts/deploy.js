
const hre = require("hardhat");

const main = async () => {
  const Renting = await hre.ethers.getContractFactory("Rent");
  const renting = await Renting.deploy();

  await renting.deployed();

  console.log("Rent deployed to:", renting.address);
}

const runMain= async ()=>{
  try{
    await main();
    process.exit(0);
  }catch(e){
    console.error(e);
    process.exit(1);
    }
  }

  runMain();
