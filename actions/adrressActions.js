const Address = require ("../models/Address");


const createAddres = async(data)=>{
    return Address.create(data);
}

const updateAddressById = (od, data) =>{
    return Address.findByIdAndUpdate(id,{$set, data}, {new:true});
}

const deleteAdrressById = (id) =>{
    return Address.findByIdAndUpdate({_id:id, is_active:false});
};