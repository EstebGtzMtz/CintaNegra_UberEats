const {GraphQLServer} = require ("graphql-yoga");
const resolvers = require("./resolvers");
const {importSchema} = require("graphql-import");
const {makeExecutableSchema} = require("graphql-tools");
const typeDefs = importSchema("./schema.graphql");
const mongoose = require("mongoose");

const {db} = require("./config");

mongoose.connect(db.url, {useNewUrlParser: true});
const mongo = mongoose.connection;

mongo.on("error", (error)=> console.log("Failed to connect to DB", error))
.once("open", ()=>console.log("Connect to DB :3"));


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const server = new GraphQLServer({
    schema,
    context : req => ({...req})
});

const options = {
    port: process.env.PORT || 8000,
    endpoint: "/graphql",
    playgound: "/playground"    
};

server.start(options,
    ({port})=> console.log(`Start in port ${port}`));

    module.exports= {schema};