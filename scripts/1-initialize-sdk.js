import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";
import dotenv from "dotenv";
dotenv.config();

// Importing and configuring our .env file that we use to securely store our environment variables
// import dotenv from "dotenv";
// dotenv.config();

const privateKey = process.env.PRIVATE_KEY;
const walletAddress = process.env.WALLET_ADDRESS;
const alchemyURL = process.env.ALCHEMY_API_URL;

// Some quick checks to make sure our .env is working.
if (!privateKey || privateKey === "") {
  console.log("🛑 Private key not found.");
}

if (!alchemyURL || alchemyURL === "") {
  console.log("🛑 Alchemy API URL not found.");
}

if (!walletAddress || walletAddress === "") {
  console.log("🛑 Wallet Address not found.");
}

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Your wallet private key. ALWAYS KEEP THIS PRIVATE, DO NOT SHARE IT WITH ANYONE, add it to your .env file and do not commit that file to github!
    privateKey,
    // RPC URL, we'll use our Alchemy API URL from our .env file.
    ethers.getDefaultProvider(alchemyURL)
  )
);

(async () => {
  try {
    const apps = await sdk.getApps();
    console.log("Your app address is:", apps[0].address);
  } catch (err) {
    console.error("Failed to get apps from the sdk", err);
    process.exit(1);
  }
})();

// We are exporting the initialized thirdweb SDK so that we can use it in our other scripts
export default sdk;
