import express from "express"



const app = express()

app.get("/hello", async (req, res) => {
    res.send("hello")
})

app.listen(4444, () => {
    console.log("server listening on 4444")
})