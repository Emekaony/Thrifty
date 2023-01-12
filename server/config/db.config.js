const mongoose = require("mongoose")

module.exports = async () => {
    const databaseParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    mongoose.set("strictQuery", false)
    try {
        mongoose.connect(process.env.DB, databaseParams)
        console.log("connected to the mongodb database")
    } catch (error) {
        console.log(`${error} could not connect`)
    }
}
