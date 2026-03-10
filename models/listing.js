const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defaultImage = "https://images.unsplash.com/photo-1772797583328-f83bc3f94f80?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        url: {
            type: String,
            default: defaultImage,
            set: (v) => v === "" ? defaultImage : v
        },
        filename: {
            type: String,
            default: "listingimage"
        }
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;