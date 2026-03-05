import { ethers } from "ethers"

async function main() {

    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)

    console.log("Deploying contract...")

}

main()
