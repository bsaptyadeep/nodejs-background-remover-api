const {removeBackgroundFromImageUrl,removeBackgroundFromImageFile} = require("remove.bg")
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const removeRoute = require("./routes/remove");

// middlewares
app.use(express.json());
app.use(cors());


const localFile = "./local/file/name.jpg";
const outputFile = `${__dirname}/out/img-removed-from-file.png`;

app.use("/remove-back", removeRoute);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));