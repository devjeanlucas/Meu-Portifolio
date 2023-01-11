const apiKey = "2e70cc07ca9423ac0684a281052c4d8a";
const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')







const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const wheaterIconElement = document.querySelector("#wheater-icon")
const countryElement = document.querySelector("#country")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")




//Realiza a consulta na API da cidade fornecida
const getWheatherData = async(city) => {
    const apiWheaterURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiWheaterURL)
    const data = await res.json()
    return data
}
const FormataTemp = async (temp) => {
    const te = temp
    var tem = parseInt(te) + ""
    var tem = tem.slice(0, -1)
    return tem + " º" + "C"
}



const showWheaterData = async (city) => {
    const data = await getWheatherData(city)
    const temp = await FormataTemp(data.main.temp)
    console.log(data)
    cityElement.innerText = data.name
    tempElement.innerText = temp
    descElement.innerText = data.weather[0].description
    wheaterIconElement.setAttribute('src', 
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    umidityElement.innerText = `${data.main.humidity}%`
    windElement.innerText = `${data.wind.speed}km/h`
    var ig = document.querySelectorAll('.ig')
    for (i of ig ) {
        i.classList.remove('hide')
    }
}



searchBtn.addEventListener('click', (e) =>{ 
    e.preventDefault()
    const city = cityInput.value;
    showWheaterData(city)
 })

 cityInput.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        const city = e.target.value;
        showWheaterData(city)
    }
 })