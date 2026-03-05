import express from "express"
import { router } from "./serviceRoutes"

const app = express()

app.use(express.json())
app.use("/service", router)

const PORT = 4020

app.listen(PORT, () => {
    console.log(`Virex402 API running on port ${PORT}`)
})
