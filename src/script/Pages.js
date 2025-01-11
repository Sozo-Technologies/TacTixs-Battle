class Pages {
    static async load(callback) {
        try {
            const response = await fetch("/DeviceIP", {
                method: "GET",
            });
    
            if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const deviceIP = await response.text();
            callback(null ,deviceIP);
        } catch (error) {
            callback(error, null);
        }
    }
}

export default Pages