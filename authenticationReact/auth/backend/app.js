const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const { authRouter } = require('./router/authRouter');
const dotenv = require('dotenv');
dotenv.config();


//---------------------------------Middleware----------------------------------------------
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use( express.json() )
app.use(session({
    secret: `${process.env.SESSION_KEY}`,
    resave: false,
    cookie: { maxAge: 30000 },   
    saveUninitialized: true
    }));

app.use((req, res, next)=>{
    console.log(req.session);
    next();
})

app.use( passport.initialize() );
app.use( passport.session() );
require('./config/passport')(passport);
//---------------------------------Middleware----------------------------------------------

app.use("/auth", authRouter);

app.listen(process.env.PORT, (req, res)=>{
    console.log(`Server Listening at PORT ${process.env.PORT}`)
});

