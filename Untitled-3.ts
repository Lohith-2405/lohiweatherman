const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return alert("Please enter a city name.");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    document.getElementById("city").textContent = data.name;
    document.getElementById("description").textContent = data.weather[0].description;
    document.getElementById("temp").textContent = data.main.temp;
    document.getElementById("humidity").textContent = data.main.humidity;
    document.getElementById("wind").textContent = data.wind.speed;

    document.getElementById("weatherBox").style.display = "block";
  } catch (error) {
    alert("Error: " + error.message);
  }
}
