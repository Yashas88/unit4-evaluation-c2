const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema(
    {
        User: {type: String, required : true}
    }
)