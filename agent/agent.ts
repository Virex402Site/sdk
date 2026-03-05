import { payForService } from "./paymentClient"

async function runAgent() {

    console.log("AI Agent requesting service...")

    const service = "data-api"
    const cost = "0.001"

    const result = await payForService(service, cost)

    console.log("Payment result:", result)

}

runAgent()
