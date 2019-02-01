const {graphql} = require("graphql");
const {schema} = require("../app");
const actions = require("../actions");
const setupTest = require("./helpers");

const mutationRegister = 
    `mutation Register($data:UserCreateInput!){
        signup
    }`;

describe("Signup user works correctly", ()=>{
    beforeEach(async () => setupTest());

    it("Should create user correctly", async()=>{
        const data ={
            first_name: "Prueba",
            profile_image:"prueba"
        }
        
        const res = await graphql(schema, mutationRegister, null, {}, {data});

        expect(res.data.signup).toHaveProperty("token");
    });
})