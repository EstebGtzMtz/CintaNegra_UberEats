const Address = require ("../models/Address");


const createAddres = async(data)=>{
    return Address.create(data);
};

const getAllAddress = () =>{
    return Address.find({is_active:true});
};

const getAddressById = (id) =>{
    return Address.findOne({_id:id, is_active: true});
};

const updateAddressById = (od, data) =>{
    return Address.findByIdAndUpdate(id,{$set, data}, {new:true});
};

const deleteAdrressById = (id) =>{
    return Address.findByIdAndUpdate({_id:id, is_active:false});
};

module.exports={
    createAddres,
    getAllAddress,
    getAddressById,
    updateAddressById,
    deleteAdrressById
}