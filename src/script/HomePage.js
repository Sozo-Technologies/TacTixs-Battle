import Pages from "./Pages.js";
import { P_Request } from "./Server.js"

Pages.load((err, data) => {
   console.log(data);
});


document.getElementById("btn").addEventListener('click', () => {
   const value = document.getElementById("typebox").value;
   P_Request("/WriteTest", {data: value}, (response) => {
      console.log(response);
   });
});