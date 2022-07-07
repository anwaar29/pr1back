const express = require('express')
const detalisRouter1 = require('./Routes/details')
const cors = require("cors")
const app = express()
app.use(cors())
app.use("/api",detalisRouter1)

app.listen(3004,()=>{
    console.log("app is running");
})