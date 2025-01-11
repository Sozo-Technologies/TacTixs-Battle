async function P_Request(route, data, callback) {
    try {
        const response = await fetch(route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    
        if(!response.ok) throw new Error("Server cant collect the request");
        const r_data = await response.text();
        callback(r_data);
    } catch (error) {
        console.log(error);
        callback(null);
    }
}

export { P_Request };