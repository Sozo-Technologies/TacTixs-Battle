const express = require("express");
const cors = require("cors");
const path = require("path");
// const route = require("./api/routes");
// const handler = require("./api/controller");

const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Streaming on: http://localhost:${port}`);
});