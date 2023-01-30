const API_KEY = `56a1eed88f24468a7edc498348895931`;
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

// selectors
let btn = document.getElementById("submitBtn");
let cityName = document.getElementById("city-name"); 
let message = document.getElementById("message"); 
let datebox = document.getElementById("date"); 
let weatherbox = document.getElementById("weather"); 

const getweather = async(event)=>{
    event.preventDefault();
    console.log(cityName.value);
    if(cityName.value === ""){
        message.innerText = "Please enter a city name";
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];
            message.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            weatherbox.innerHTML = `<div id="weather">${arrData[0].main.temp} &deg; C <img src="https://openweathermap.org/img/wn/${arrData[0].weather[0].icon}@2x.png" class="weather-img" alt="weather image"></div>`;
        }
        catch(error){
            message.innerText = "Please enter a valid city name";
        }
    }
}

btn.addEventListener("click", getweather);

const getDate = ()=>{
    let date = new Date();
    // console.log(date.getDay());
    // console.log(date.getMonth());
    // console.log(date.getDate());
    let weekArr = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let monthArr = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let fullDate = `${weekArr[date.getDay()]} , ${date.getDate()} ${monthArr[date.getMonth()]}`;
    datebox.innerText = `${fullDate}`;
}

// initial call
getDate();