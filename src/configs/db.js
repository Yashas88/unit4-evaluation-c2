const mongoose = require("mongoose");

const URI = "mongodb+srv://admin:admin@bankdatabase.ftnux.mongodb.net/test";

const dbconnect = mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}, err => {
    if(err) {
        console.log("error in db connection");
    } else {
        console.log("Database connected");
    }
})