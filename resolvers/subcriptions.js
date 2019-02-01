const {GENERAL_CHAT} = require ("../Utils/")

const newComment = {
    subscribe : (parent, args, {pubsub}) =>{
        return pubsub.asyncIterator(GENERAL_CHAT)
    }
};

const newPrivateComment = {
    subscribe: (parent, args, {pubsub})=>{
        return pubsub.publish(GENERAL_CHAT, {newComment: newComment});
    }
}

module.exports = {
    newComment
}