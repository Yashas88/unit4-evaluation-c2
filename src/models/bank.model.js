const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema(
    {
        User: {
            firstname : {type : String, required : true},
            midname : {type : String, required : false},
            lastname : {type: String, required : true},
            age : {type : String, required : true},
            email : {type : Number, required : true},
            address : {type : Number, required : true},
            gender : {type : Number, required : true, default : "Female"},
            type : {type : Number, required : true, default : "Customer"},
            createdAt : {type : String, required: true},
            updatedAt : {type : String, required : true}
            
        },
    //    BranchDetail : {
    //        name : {type : String, required : true},
    //        address : {type : String, required : true},
    //        IFSC : {type : String, required : true},
    //        MICR : {type : String, required : true},
    //        createdAt : {type : String, required: true},
    //         updatedAt : {type : String, required : true}
    //    },

    },
    {
        versionKey : false,
        timestamps : true,
    }
);

const user = mongoose.model("user", bankSchema);
module.exports = user;
