const Orders = require ("../models/Orders");

const createOrder = (data) =>{
    return Orders.create(data);
};

const getAllOrders = () =>{
    return Orders.find();
};

const updateOrderById = (id, data) => {
    return Orders.finnByIdAndUpdate(id,{$set: data}, {new: true});
};

const deleteOrderById = (id) => {
    return Orders.finnByIdAndUpdate({_id:id, is_active: false});
};


