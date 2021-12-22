import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x1819F0e72C9e793197bf728225e22c20B332A9B1",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Iridescent Cube",
        description: "This NFT is the portal to HackDAO!",
        image: readFileSync("scripts/assets/cube.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()