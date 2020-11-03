import {config} from "dotenv"
config()

import express from "express"
import cors from "cors"

const app = express()

app.set("PORT", process.env.PORT || 4000)

app.use(cors())

export default app
