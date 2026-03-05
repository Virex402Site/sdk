import { ethers } from "ethers"
import dotenv from "dotenv"

dotenv.config()

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)

export async function payForService(service: string, amount: string) {

    const tx = {
        to: process.env.SERVICE_WALLET,
        value: ethers.parseEther(amount)
    }

    const transaction = await wallet.sendTransaction(tx)

    await transaction.wait()

    return {
        service,
        txHash: transaction.hash
    }

}
