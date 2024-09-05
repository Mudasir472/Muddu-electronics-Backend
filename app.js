const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./modals/UserModal");
const cookieParser = require("cookie-parser");
const { isLoggedIn } = require("./MiddleWare.js")

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the origin of your React app
    credentials: true // Allow credentials (cookies)
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
const categoryRouter = require("./routes/category.router.js");
const userRouter = require("./routes/user.router.js");

// MongoDB Connection
const mongoose = require("mongoose");
main()
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Mudduelectronics");
}


// Use cookie-parser middleware
app.use(cookieParser());

// Session setup
const session = require("express-session");
const MongoStore = require("connect-mongo");

const store = MongoStore.create({
    mongoUrl: "mongodb://127.0.0.1:27017/Mudduelectronics",
    crypto: {
        secret: 'mysecretcode',
    },
    touchAfter: 24 * 3600 // In seconds
});

app.use(session({
    secret: 'mysecretcode',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        secure: false,
        signed: false
    }
}));

// Initialize Passport.js and use session
app.use(passport.initialize());
app.use(passport.session());

// Passport.js setup
passport.use(new LocalStrategy(User.authenticate()));

// Serialize and deserialize user for session management
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

// Routes  of Category 
app.use("/", categoryRouter)
app.use("/", userRouter)

// Start server
const port = 8090;
app.listen(port, () => {
    console.log("Listening at port 8090");
});
