const express = require('express')

const router = express.Router()

router.get("/", (req, res)=> {
    res.send("Это мой проект")
})


module.exports = router;