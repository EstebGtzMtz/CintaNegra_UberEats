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

    },

    production:{

    }
}

module.exports=ENVS[NODE_ENV]
