import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    posterId : {
        type : mongoose.Types.ObjectId,
        required : true
    },
    // commenterId : {                              //  taking from jwt token
    //     type : mongoose.Types.ObjectId,
    //     required : true
    // },
    comment : {
        type : String,
        required : true,
    }
}, {timestamps : true});

export default mongoose.model('Comment', commentSchema);
