const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_FACTOR = 10;


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    mlast_name:{
        type: String,
        required: true
    },
    birthday:{
        type: Date,
    },
    phone_number:{
        type: Number,
        required: false
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ["Male", "Female"]
    },
    photo_user:{
        type: String,
        required: true
    },
    address_id:{
        type: Schema.Types.ObjectId,
        ref:"address"
    },
    is_active:{
        type: Boolean,
        default: true
    }
}, {"collection": "users", "timestamps": true});

UserSchema.pre("save", function (next) {
	let user = this;
	if (!user.isModified("password")) { return next(); }
	bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash(user.password, salt,function (err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});



});

mongoose.Types.ObjectId.prototype.valueOf = function () {
	return this.toString();
};

module.exports = mongoose.model("users", UserSchema);
