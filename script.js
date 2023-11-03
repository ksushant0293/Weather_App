const apiKey = "18370883aac4d39f64aa01a21a32c001";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=bangalore";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data)
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
checkWeather();