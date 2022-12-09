const express = require('express');

const app = express();


app.get("/", (req, res, next) => {
    res.send("success")
})


app.listen(3000, () => {
    console.log("listen on port no 3000");
})

