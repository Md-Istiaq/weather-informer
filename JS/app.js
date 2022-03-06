const API_KEY = `859740d4e01b266beb31d7f7b73e9b1b`;
const searchTemp = () =>{
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data=> displayTemp(data));
}
const displayTemp = temp =>{
    document.getElementById('city').innerText = temp.name
    document.getElementById('temp').innerText = temp.main.temp
    document.getElementById('humidity').innerText = temp.main.humidity
    document.getElementById('pressure').innerText = temp.main.pressure
    document.getElementById('wind').innerText = temp.wind.speed
    document.getElementById('deg').innerText = temp.wind.deg
    document.getElementById('weather').innerText = temp.weather[0].main
    const url = ` http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    document.getElementById('weather-icon').setAttribute('src',url)
    console.log(temp)
}