const apikey = "46f80a02ecae410460d59960ded6e1c6"
const weatherdataEl = document.querySelector(".weather-data")
const cityinputEl = document.getElementById("city-input")
const formEl = document.querySelector("form")

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
    const cityValue = cityinputEl.value
    getWeatherData(cityValue)
})

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
        )

        if (!response.ok) {
            throw new Error("Network response was not ok")
        }

        const data = await response.json()
        const temperature = Math.round(data.main.temp)
        const description = data.weather[0].description
        const icon = data.weather[0].icon

        const details = [
            `Feels like: ${data.main.feels_like}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ]

        weatherdataEl.querySelector(".icon").innerHTML =
            `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`

        weatherdataEl.querySelector(".temperature").textContent = `${temperature}°C`
        weatherdataEl.querySelector(".description").textContent = description
        weatherdataEl.querySelector(".details").innerHTML = details
            .map(detail => `<div>${detail}</div>`)
            .join("")
    } catch (error) {
        weatherdataEl.querySelector(".icon").innerHTML = ""
        weatherdataEl.querySelector(".temperature").textContent = ""
        weatherdataEl.querySelector(".description").textContent = "An error has occurred, please try again"
        weatherdataEl.querySelector(".details").innerHTML = ""
    }
}

