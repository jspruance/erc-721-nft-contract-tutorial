const { ethers } = require("hardhat")
const cryptoBeetlesJSON = require("../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json")

async function main() {
  const abi = cryptoBeetlesJSON.abi
  const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.PROJECT_ID)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
  const signer = wallet.connect(provider)
  const cryptoBeetles = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
  await cryptoBeetles.mint("https://ipfs.io/ipfs/QmRGNeFvupSSq96WxoYeRAjuvGpYQxdjpLXkBBHgX3pFM6")
  console.log('NFT minted!')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
