const Listing = require("../models/listing.js");
const maptilerClient = require("@maptiler/client");
// const maptilersdk = require('@maptiler/sdk');
maptilerClient.config.apiKey = process.env.MAP_API_KEY;
// maptilersdk.config.apiKey = process.env.MAP_API_KEY;

module.exports.index = async (req, res) => {
    const { category } = req.query;
    let allListings;

    if (category) {
        allListings = await Listing.find({ category: category });
    } else {
        allListings = await Listing.find({});
    }

    res.render("listings/index.ejs", { allListings });
};


module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews", 
            populate: { 
                path: "author"
            }
        })
        .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exists!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing, apiKey: process.env.MAP_API_KEY});
};

module.exports.createListing = async(req, res, next) => {
    const result = await maptilerClient.geocoding.forward(req.body.listing.location, { limit: 1 });
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = result.features[0].geometry;
    let savedListing = await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exists!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_200,w_250");
    res.render("listings/edit.ejs", {listing, originalImageUrl });
};

module.exports.updateListing = async(req, res) => {
    let { id } = req.params;
    if(!req.body.listing){
        throw new ExpressError(400, "Send valid data for listing.");
    }
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

module.exports.search = async (req, res) => {
    let { search } = req.query;
    
    if (!search || search.trim() === "") {
        return res.redirect("/listings");
    }

    const allListings = await Listing.find({
        $or: [
            { title: { $regex: search.trim(), $options: "i" } },
            { location: { $regex: search.trim(), $options: "i" } },
            { country: { $regex: search.trim(), $options: "i" } },
            { category: { $regex: search.trim(), $options: "i" } } 
        ]
    });

    res.render("listings/index.ejs", { allListings });
};

