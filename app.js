const express = require("express");
const https = require("https");

const app = express();



app.get("/" , function(req,res){
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Hangzhou&appid=2dff358d9727cd778a014f944690834e"
  https.get(url,function(response){
    console.log(response.statusCode);

    response.on("data",function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      res.send("+he temp in hangzhou" + temp + "Celcius")
      // return
    })

  })

  // res.send("Server is running")
})

app.listen(3000 , function(){
  console.log("Sever is running on port 3000")
})
