const cron = require("node-cron");
const axios = require("axios");

cron.schedule("0 */10 * * * *", function () {
  console.log("---------------------");
  console.log("Checking every 10 minutes");
/*
  axios.get("https://digital-menu-api-0.onrender.com")
    .then(function (response) {
        console.log("Backend OK");
    })
    .catch(function (error) {
        if(error.response.status == 401) {
            console.log("Backend OK");
        } else {
            console.log(error);
        }
        
    })
    .finally(function () {
    });

  axios.get("https://digital-menu-backoffice-0.onrender.com")
    .then(function (response) {
        console.log("Frontend OK");
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });*/

});
