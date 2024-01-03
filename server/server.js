import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();
let PORT = 5000;
mongoose.connect(process.env.DB_LOCATION, { autoIndex: true });
app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
