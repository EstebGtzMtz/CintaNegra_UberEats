const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const RestaurantsSchema = new Schema({
    id:{
        type: Schema.Types.ObjectId,
        ref: "address"
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    schedule:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    img_logo:{
        type: String,
        required: true
    },
    is_active:{
        type: Boolean,
        default: true
    }
    

}, {"collection": "restaurants", "timestamps": true});

mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("restaurants", RestaurantsSchema);