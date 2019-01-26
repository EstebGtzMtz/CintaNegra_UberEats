const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    id_user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    id_rest:{
        type: Schema.Types.ObjectId,
        ref: "restaurants"
    },
    id_food:{
        type:[],
        required: true
    },
    total_Price:{
        type: Number,
        required: false
    },
    is_active:{
        type: Boolean,
        default: false
    }
},{"collection": "orders", "timestamps": true});

mongoose.Types.ObjectId.prototype.valueOf = function(){
    return toString();
}

mongoose.exports = mongoose.model("orders", OrdersSchema);