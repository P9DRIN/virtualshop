const mongoose = require('mongoose')

function connectToDataBase(){
    mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true,
    })

const db = mongoose.connection;
    db.on("error", (error) => {
        console.log(error)
});  db.once("open", () => console.log("✨ Sucessfully connected to the database.") )
}

module.exports = connectToDataBase;