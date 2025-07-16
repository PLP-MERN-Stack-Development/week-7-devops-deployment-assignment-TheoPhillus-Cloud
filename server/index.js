import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(helmet(), express.json())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10
})

app.get('/api/health', (req, res) => res.json({ status: 'OK' }))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on ${PORT}`))