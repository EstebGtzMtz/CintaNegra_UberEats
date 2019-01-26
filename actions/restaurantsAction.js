const Restaurant = require ("../models/Restaurants");


const createRestaurant = async(data) => {
    return Restaurant.create(data);
};

const getAllReastaurants = () =>{
    return Reastaurants.find({is_active:true});
};

const getRestaurantById = (id) =>{
    return Restaurant.findOne({_id:id, is_active:true});
};

const updateRestaurantById = (id, data) =>{
    return Restaurant.findByIdAndUpdate(id,{$set:data}, {new:true});
};

const deleteRestaurantById = (id) => {
    return Restaurant.findByIdAndUpdate({_id:id, is_active:false}, {set:{is_active:false}},{new:true});
};

module.exports = {
    createRestaurant,
    getAllReastaurants,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById
}
