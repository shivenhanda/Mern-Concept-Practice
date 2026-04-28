import express from 'express'
import bcrypt from 'bcrypt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import path from 'path'
import { configDotenv } from 'dotenv'

configDotenv({ quiet: true })

const app = new express();
const port = process.env.PORT
const staticPath = path.join(process.cwd(), '..', 'frontend', 'dist')

app.use(express.static(staticPath))

app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'))
})

app.listen(port, () => {
    console.log("Available on localhost", port)
})