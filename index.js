let request = require('request')

let apiKey = 'a383294d477fa362f1a529a8d0c20a41';
let city = 'monaragala';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request (url, function (err, response, body){
    if(err){
        console.log('error:',error);
    }else{
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name} !`;
        console.log(message);
    }
});






