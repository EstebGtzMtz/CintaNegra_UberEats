const actions = require("../actions");
const {getUserId} = require ("../Utils");
const {storeUpload} = require("../Utils");

const signup=async(_,AbortSignal, context, info)=>{
    const {createReadStream} = await args.data.profile_image;
    const stream = createReadStream();
    const {url} = await storeUpload(stream);
    args.data.profile_image = url;
    return actions.signup(args, data).then(
        token=>{return {"message":"User created succesfully", token: token};}
    ).catch(e=>e);
};

const login = (_, args, context, info) =>{
    return actions.login(args).then(
        token => {return {"Message": "User logged succesfully", token: token};}
    ).catch(e=>e);
};

const updateUser=(_, args, context, info)=>{
    return actions.updateUserById(args.id, args.data).then((user)=>{
        if(!user) throw new Error("User does not exist");
        return user;
    }).catch((e)=>e);
};

const deleteUser=(_, args, context, info)=>{
    return actions.deleteUserById(args.id).then((user)=>{
        if(!user) throw new Error ("User does not exist");
        return "User deleted succesfully";
    }).catch((e)=>e);
}

/*const createRestaurant =(_,args, context, info)=>{
    const user = await getUserId(context)
}*/

const updateRestaurant =(_,args, context, info)=>{
    return actions.updateRestaurantById(args.id, arsg.data).then((restaurant)=>{
        if(!restaurant) throw new Error("Restaurant does not exist");
        return restaurant;
    }).catch((e)=>e);
};

const deleteRestaurant =(_, args, context, info)=>{
    return actions.deleteRestaurantById(args.id).then((restaurant)=>{
        if(!restaurant) throw new Error ("Restaurant does not exist");
        return restaurant;
    }).catch((e)=>e);
};

/*const createAddress =(_,args, context, info)=>{
}*/

const updateAddress=(_,args, contex, info)=>{
    return actions.updateAddressById(args.id, args.data).then((address)=>{
        if(!address) throw new Error ("Address does not exist");
        return address;
    }).catch((e)=>e);
};

const deleteAddress=(_,args, context, info)=>{
    return actions.deleteAdrressById(args.id).then((address)=>{
        if(!address) throw new Error ("Address does not exist");
        return "User deleted succesfully";
    }).catch((e)=>e);
};

/*const createOrder =(_,args, context, info)=>{
}*/

const updateOrder=(_,args, context, info)=>{
    return actions.updateOrderById(args.id, args.data).then((order)=>{
        if(!order) throw new Error ("Order does not exist");
        return order;
    }).catch((e)=>e);
};

const deleteOrder=(_,args, context, info)=>{
    return actions.deleteOrderById(args.id).then((order)=>{
        if(!order) throw new Error ("Order does not exist");
        return "User deleted succesfully";
    }).catch((e)=>e);
};

/*const createFood =(_,args, context, info)=>{
}*/

const updateFood=(_, args, context, info)=>{
    return actions.updateFoodById(args.id, args.data).then((food)=>{
        if(!food) throw new Error ("Food does not exist");
        return food;
    }).catch((e)=>e);
};

const deleteFood=(_, args,context, info)=>{
    return actions.deleteFoodById(args.id, args.data).then((food)=>{
        if(!food) throw new Error ("Food does not exist");
        return "Food deleted succesfully";
    }).catch((e)=>e);
}




module.exports={
    signup,

}