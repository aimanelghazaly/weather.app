const apikey = "ffdc371be02c79617d6d026f51f375a0";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    await getWeatherData(cityValue);  // Ajout de "await" pour attendre que getWeatherData soit résolu
});

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Utilisez les données comme nécessaire ici
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${Math.round(data.main.humidity)}`,
            `Wind speed: ${data.wind.speed}`
        ];

        // Utilisation de innerHTML pour mettre à jour le contenu HTML
        weatherDataEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">`;
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent = description;
        weatherDataEl.querySelector(".details").innerHTML = details.map(detail => `<li>${detail}</li>`).join('');
        
    } catch (error) {
        console.error(error);
    }
}
