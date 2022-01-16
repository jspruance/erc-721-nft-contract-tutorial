const { ethers } = require("hardhat")

async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles")
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET")

  await cryptoBeetles.deployed()
  console.log(`Contract successfully deployed to ${cryptoBeetles.address}`)

  const newItemId = await cryptoBeetles.mint("https://ipfs.io/ipfs/QmSgF5GanmEvZjQ3VYj9r83kvp5zeXe9UcihHxK4PKVzJ2")
  console.log(`NFT minted successfully :: ${newItemId}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
