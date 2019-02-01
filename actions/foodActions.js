const Food = require("../models/Food");

const createFood = async(data) =>{
    return Food.create(data);
};

const getAllFood = () =>{
    return Food.find({is_active: true});
};

const getFoodByName = (name) =>{
    return Food.findOne({_name:name, is_active:true});
};

const updateFoodById = (id, data) =>{
    return Food.findByIdAndUpdate(id, {$set: data}, {new: true});
};

const deleteFoodById = (id) =>{
    return Food.findByIdAndUpdate({_id:id, is_active:true}, {set:{is_active:false}},{new:true});
}

module.exports={
    createFood,
    getAllFood,
    getFoodByName,
    updateFoodById,
    deleteFoodById
}

