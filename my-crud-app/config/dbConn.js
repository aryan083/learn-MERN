
const mongoose = require('mongoose');
const uri = "mongodb+srv://aryanmahida2:0KrVSWz7S5MQPpV6@testdbforcrud.b92kpyh.mongodb.net/?retryWrites=true&w=majority&appName=TestDBforCRUD";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function dbConn() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
 

}
catch(err){
    throw new err;

}
};

module.exports = dbConn;
