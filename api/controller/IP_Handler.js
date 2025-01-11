const os = require("os");

function getIPAddress() {
    const interfaces = os.networkInterfaces();
    for(const names of Object.keys(interfaces)) {
        for(const iface of interfaces[names])
            if(iface.family === "IPv4" && !iface.internal)
                return iface.address;
    }
}

module.exports = { getIPAddress };