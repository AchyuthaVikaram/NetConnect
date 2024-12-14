import mongoose from "mongoose";

const connectionSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },
    connectionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },
    status_accepted:{
        type:Boolean,
        default:null
    }

})

const Connection= mongoose.model("Connection",connectionSchema);
export default Connection;