var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    flash      = require("connect-flash"),
    passport   = require("passport"),
    localStrategy = require("passport-local"),
    User       = require("./models/user"),
    methodOverride = require("method-override"),
    seedDB     = require("./seeds");
    
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes = require("./routes/index");

var uri = "mongodb://heroku_10j8qznd:fojgmnk93jgthlt7sps927g4ev@ds235785.mlab.com:35785/heroku_10j8qznd";

mongoose.connect(uri);
// mongoose.connect(uri);
app.use(bodyParser.urlencoded({extended: true}));
mongoose.Promise = global.Promise;



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
seedDB(); //seed the database

app.locals.moment = require("moment");

// PASSPORT CONFIG
app.use(require("express-session")({
    secret: "I want to learn",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error   = req.flash("error");
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

app.listen(process.env.PORT || 3000, function(){
    console.log("The YelpCamp Server has started");
});