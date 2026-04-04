import express from 'express';
import bcrypt from 'bcrypt'
import UserModel from './model/user.js'
import jwt from 'jsonwebtoken'
const app = express()
const port = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", 'ejs')
app.get("/", (req, res) => {
    res.render("index")
})
app.post("/create", async (req, res) => {
    let { username, email, password } = req.body
    let salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password, salt)
    let CreateUser = await UserModel.create({
        name: username,
        email,
        password
    })
    let token = jwt.sign({ email }, "secret")
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "lax"
    })
    res.send(CreateUser)
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.post("/login", async (req, res) => {
    let { email, password } = req.body
    let user = await UserModel.findOne({ email })
    if (!user) return res.send("Something is wrong");
    let match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.send("Something is Wrong1")
    }
    let token = jwt.sign({ email }, "secret")
    res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax"
        })
    res.send("Successfully Login")
})
app.get("/logout", (req, res, next) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "lax"
    })
    next()
    res.redirect("/")
})
app.listen(port, () => {
    console.log("Available on localhost", port)
})