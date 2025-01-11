const express = require("express");
const cors = require("cors");
const exp = require("constants");
const { sourcePath, path } = require("./api/source_path");
const { getIPAddress } = require("./api/controller/IP_Handler");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static(sourcePath));
app.use(cors({
    origin: "*"
}));

app.get("/", (req, res) => {
    res.sendFile(path.join(sourcePath, "pages/HomePage.html"));
});

app.get("/DeviceIP", (req, res) => {
    const IPAddress = getIPAddress() || "None";
    const status = IPAddress == "None" ? 300 : 200;
    res.status(status).send(IPAddress);
});

app.listen(port, () => {
    console.log(`Streaming on: http://localhost:${port}`);
});