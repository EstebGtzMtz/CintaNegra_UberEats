const NODE_ENV = process.env.NODE_ENV || "dev";

const ENVS = {
    dev: {
        SECRET_KEY: "OSOJUDIO",
        db:{
            url:"mongodb://esteban:g13143099@ds211875.mlab.com:11875/ubereats_cintanegra"
        },
        port: 3000
    },

    test:{
        SECRET_KEY: "OSOJUDIO",
        db:{
            url:"mongodb://EstebanTest:g13143099@ds143603.mlab.com:43603/ubereats_cintanegra_test"
        },
    },

    production:{
        SECRET_KEY: procces.env.SECRET_KEY,
        db:{
            url: procces.env.MONGO_URL
        }
    }
}

module.exports=ENVS[NODE_ENV]
