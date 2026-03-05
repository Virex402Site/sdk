import { Router } from "express"

export const router = Router()

router.get("/data", async (req, res) => {

    res.json({
        data: "Autonomous economy data feed",
        price: "0.001 ETH"
    })

})

router.post("/execute", async (req, res) => {

    const { agent, action } = req.body

    res.json({
        status: "executed",
        agent,
        action
    })

})
