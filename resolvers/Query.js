const actions = require("../actions");

const Users = (_,args, context, info)=>{
    return actions.getAllUsers().then(users=>users)
    .catch(e=>e);
};

const User = (_,args, context, info) =>{
    return actions.getUserById(args.id).then((user)=>{
        if(!user) throw new Error("user does nor exist");
        return user;
    }).catch((e)=>e);
};

const UserEmail = (_, args, context, info) =>{
    return actions.getUserByEmail(args.email).then((user)=>{
        if(!user) throw new Error ("User does not exist");
        return user;
    }).catch((e)=>e);
};

const Restaurants = (_,args, context, info)=>{
    return actions.getAllReastaurants().then((restaurants => restaurants)
    .catch((e)=> e));
};

const RestaurantId = (_,args, context, info)=>{
    return actions.getRestaurantById(args.id).then((restaurant)=>{
        if(!restaurant) throw new Error ("Restaurant does not exist");
        return restaurant;
    }).catch((e)=>e);
};

const Food = (_, args, context, info)=>{
    return actions.getAllFood().then((food => food)
    .catch((e)=>e));
};

const FoodName = (_, args, context, info)=>{
    return actions.getFoodByName(args, name).then((foodName)=>{
        if(!foodName) throw new Error ("Food does not exist");
        return foodName;
    }).catch((e)=>e);
};

const Orders = (_, args, context, info)=>{
    return actions.getAllOrders().then((orders => orders)
    .catch((e)=>e));
};

const allAddress = (_, args, context, info) =>{
    return actions.getAllAddress().then((address => address)
    .call((e)=>e));
};

const addressId = (_,args, context, info) => {
    return actions.getAddressById(args, id).then((idAddress)=>{
        if(!idAddress) throw new Error("Address does not exist");
        return idAddress;
    }).catch((e)=>e);
};


module.exports={
    Users,
    User,
    Restaurants,
    RestaurantId,
    Food
};