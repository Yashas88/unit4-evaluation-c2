const express = require("express");
const Bankdb = require("../models/bank.model");

const router = express.Router();

router.post("", async (req, res) => {
    try {
        const Bankdb = await Bankdb.create(req.body);
        returnres.status(200).send(Bankdb);
    } catch (err) {
        return res.status(500).send(err.message);
    }
})

module.exports = router;

