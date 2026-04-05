const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

module.exports.renderSignupForm = (req, res) => {
    res.render("user/signup.ejs");
};

module.exports.signup = async (req, res) => {
    try {
        let {username, email, password} = req.body;
        const newuser = User({username, email});
        let registeredUser = await User.register(newuser, password);
        req.login(registeredUser, (err) => {
            if(err){
                return next();
            }
            req.flash("success", "Welcome to Wanderlust!");
        res.redirect("/listings");
    });
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render("user/login.ejs");
};

module.exports.login = async(req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "You are logged out!");
        res.redirect("/listings");
    });
};

module.exports.renderSignoutForm = (req, res) => {
    res.render("user/signout.ejs");
};

module.exports.deleteAccount = wrapAsync (async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findById(req.user._id);

    const { user: authenticatedUser } = await User.authenticate()(username, password);

    if (!authenticatedUser) {
        req.flash("error", "Incorrect username or password.");
        return res.redirect("/signout-confirm");
    }

    await User.findByIdAndDelete(user._id);

    req.logout((err) => {
        if (err) return next(err);
        req.flash("success", "Your account and all associated data have been deleted permanently.");
        res.redirect("/listings");
    });
});