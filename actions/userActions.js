const User = require("../models/Users");

const createUser = async (data) =>{
    return User.create(data);
};

const getAllUsers = () =>{
    return User.find({is_active:true});
};

const getUserByEmail = (email) =>{
    return User.findOne({email:email});
};

const getUserById = (id) =>{
    return User.findOne({_id:id, is_active:true}).select("-password");
};

const updateUserById = (id, data) =>{
    return User.findByIdAndUpdate(id,{$set:data}, {new:true}).select("-password");
};

const deleteUserById = (id) =>{
    return User.findByIdAndUpdate({_id:id, is_active:true}, {set:{is_active: false}},{new:true});
};

module.exports = {
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserById,
    updateUserById,
    deleteUserById
}

