const express = require("express");
const cors = require("cors");
const path = require("path");
const exp = require("constants");
// const route = require("./api/routes");
// const handler = require("./api/controller");

const app = express();
const port = 5000;
const sourcePath = path.join(__dirname, "src");

app.use(express.json());
app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.sendFile(path.join(sourcePath, "pages/HomePage.html"));
});

app.listen(port, () => {
    console.log(`Streaming on: http://localhost:${port}`);
});