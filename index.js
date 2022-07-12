import "dotenv/config";
import "./database/connectdb.js";
import cookieParser from "cookie-parser";
import express, { application } from "express";
import authRouter from "./routes/auth.route.js";
import linkRouter from "./routes/link.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());

// solo para el ejemplo login/token
app.use(express.static('public'));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/links", linkRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log("🔥🔥🔥🔥 http://localhost:"+PORT) );