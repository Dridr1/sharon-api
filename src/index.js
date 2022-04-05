import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`WELCOME TO SHARON!`);
    console.log(`SERVER RUNNING AT PORT ${PORT}`);
});