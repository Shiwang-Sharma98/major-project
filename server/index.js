const express= require("express");
const app = express();

const userRoutes = require("../server/routes/User");
const profileRoutes = require("../server/routes/Profile");
const courseRoutes = require("../server/routes/Course");
const contactRoutes = require("../server/routes/Contact");


const database = require("../server/config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect} = require("../server/config/cloudinary");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
dotenv.config();
const PORT = process.env.PORT || 4000;


database.dbConnect();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp"
    })
)


cloudinaryConnect();

// routes

app.use("/api/v1/auth",userRoutes);
app.use("/api/v1/profile",profileRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/reach",contactRoutes);




app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:"your server is up and running"
    });
});


app.listen(PORT,()=>{
    console.log("App is running at port 4000")
})










