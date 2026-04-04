const Joi = require("joi");

module.exports.listingSchema = listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.object({
            url: Joi.string().allow("", null)
        }),
        category: Joi.string().required().valid(
            "Trending", "Rooms", "Iconic cities", "Mountains", "Castles", 
            "Amazing pools", "Camping", "Farms", "Arctic", "Beach", "Domes"
        )
    }).required()
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});