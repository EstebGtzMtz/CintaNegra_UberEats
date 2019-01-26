const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema=({
    id:{
        type: Number,
        required: true
    },
    street:{
        type: String,
        require: true
    },
    ext_Number:{
        type: Number,
        required:false
    },
    int_Number:{
        type: Number,
        required: false
    },
    references:{
        type: String,
        required: true
    },
    CP:{
        type: Number,
        required: true
    }
},{"collection": "address", "timestamps": true});

mongoose.Types.ObjectId.prototype.valueOf=function(){
    return this.toString();
}

module.exports = mongoose.model("address", AddressSchema);