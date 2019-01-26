const actions = require("../actions");

const Users = (_,args, context, info)=>{
    return actions.getAllUsers().then(users=>users)
    .catch(e=>e);
};

module.exports={
    Users
}