const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    middle_name:{type:String,required:false},
    last_name:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    address:{type:String,required:true},
    gender:{type:String,required:true},
    type:{type:String,required:false, default:"customer"},
},
{
   
timestamps:true,
versionKey:false
}
)

const User=mongoose.model("user",userSchema)


const branchSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    IFSC:{type:String,required:false},
    MICR:{type:Number,required:true},

},
{
   
timestamps:true,
versionKey:false
}
)

const Branch=mongoose.model("branch",branchSchema)


const masterSchema=new mongoose.Schema({
    balance:{type:Number,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    branch_id:{type:mongoose.Schema.Types.ObjectId,ref:"branch",required:true},


},
{
   
timestamps:true,
versionKey:false
}
)

const Master=mongoose.model("master",masterSchema)

const savingSchema=new mongoose.Schema({
    account_number:{type:Number,required:true},
    balance:{type:Number,required:true},
    interest:{type:Number,required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},



},
{
   
timestamps:true,
versionKey:false
}
)

const Saving=mongoose.model("saving",savingSchema)


const fixedSchema=new mongoose.Schema({
    // account_number:{type:Number,required:true},
    balance:{type:Number,required:true},
    interest:{type:Number,required:true},
    star_date:{type:String,required:true},
    maturityDate:{type:String,required:true},
    saving_id:{type:mongoose.Schema.Types.ObjectId,ref:"saving",required:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},



},
{
   
timestamps:true,
versionKey:false
}
)


// const bankSchema = new mongoose.Schema(
//     {
//         User: {
//             firstname : {type : String, required : true},
//             midname : {type : String, required : false},
//             lastname : {type: String, required : true},
//             age : {type : String, required : true},
//             email : {type : Number, required : true},
//             address : {type : Number, required : true},
//             gender : {type : Number, required : true, default : "Female"},
//             type : {type : Number, required : true, default : "Customer"},
//             createdAt : {type : String, required: true},
//             updatedAt : {type : String, required : true}
            
//         },
    //    BranchDetail : {
    //        name : {type : String, required : true},
    //        address : {type : String, required : true},
    //        IFSC : {type : String, required : true},
    //        MICR : {type : String, required : true},
    //        createdAt : {type : String, required: true},
    //         updatedAt : {type : String, required : true}
    //    },

//     },
//     {
//         versionKey : false,
//         timestamps : true,
//     }
// );

const user = mongoose.model("user", bankSchema);
module.exports = user;
