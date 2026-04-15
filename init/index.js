require('dns').setServers(["8.8.8.8", "8.8.4.4"]);
if(process.env.NODE_ENV != "production") {
    require("dotenv").config({ path: "../.env" });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;

main()
.then(() => {
    console.log("DB Connected");
    return initDB();
})
.then(() => {
    console.log("Seeding complete");
    mongoose.connection.close();
})
.catch((err) => {
    console.log("Error:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

async function initDB() {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "69d23d642c82b825fc914c20"
    }));

    await Listing.insertMany(initData.data);
    console.log("Data successfully initialized");
}