import { config } from 'dotenv'
config()

import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import authRoutes from './routes/auth.routes'
import boardRoutes from './routes/board.routes'

// setting up
const app: Application = express()

// global variables
app.set('PORT', process.env.PORT || 4000)

// middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/api/auth', authRoutes)
app.use('/api/board', boardRoutes)

export default app
