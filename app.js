const express = require("express");
const cors = require("cors");
const exp = require("constants");
const { sourcePath, path } = require("./api/source_path");

const app = express();
const port = 5000;

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