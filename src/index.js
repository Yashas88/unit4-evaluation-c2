const express = require("express");
const bankController = require("./controllers/bank.controller");

const connect = require("./configs/db");
const app = express();

const PORT = 4000;
app.use(express.json());

app.use("/bankdatabase", bankController);

app.get("/", (req, res) => {
     console.log("welcome to bank");
     res.json("welcome to bank");
});

app.listen(PORT, async function () {
    try {
        await connect();
        console.log(`Server is running at ${PORT}`);
    } catch(e) {
        console.log("error is ", e.message);
    }
})


// console.log("welcome to bank")