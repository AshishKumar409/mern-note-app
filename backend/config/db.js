const mongoose = require("mongoose")


const connectDb = async()=>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true})

    console.log(`Mongoose connected ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit()
  }
}

module.exports = connectDb;