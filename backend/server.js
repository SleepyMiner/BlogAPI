const express = require("express");
const { errorHandler } = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const connectDB = require("../config/dbConfig");
const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/blogs", require("./routes/blogRoute"));
app.use(errorHandler);

app.listen(port, () => console.log(`The server started on ${port}`));
