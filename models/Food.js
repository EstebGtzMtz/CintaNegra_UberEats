const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    id:{
        type:Number,
        require: true
    },
    name:{
        type: String,
        required: true
    },
    decription:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    picture:{
        type: String,
        required: true
    },
    id_rest:{
        type: Schema.Types.ObjectId,
        ref="restaurants"
    },
    is_Active:{
        type: Boolean,
        default: true
    }
}, {"collection": "food", "timestamps": true});

mongoose.Types.ObjectId.prototype.valueOf = function(){
    return this.toString();
}

module.exports = mongoose.model("food", FoodSchema);