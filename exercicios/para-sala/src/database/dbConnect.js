const DATABASE_MONGO = process.env.DATABASE_MONGO
const mongoose = require('mongoose');
const connect = async () => {
    try {
        monsgoose.connect(DATABASE_MONGO, 
        {useNewUrlParser: true,
        useUnifiedTopology: true,
  })
  console.log("Databade connect")
    } catch (error) {
        console.log(error)
    }

}

module.exports = connect 