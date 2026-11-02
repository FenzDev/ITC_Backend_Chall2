import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())



// Routes
// 'GET /': Welcome message
app.get('/', (_,res)=>{
    res.send("Hello world !");
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
