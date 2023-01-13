const express = require("express")
const app = express()
const SERVER_PORT = process.env.PORT || 8080
require("dotenv").config()
const dbConnection = require("./config/db.config")
const cors = require("cors")
dotenv.config()

app.use(
    cors({
        origin: "*",
    })
)

dbConnection()

app.use(express.json())

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})
