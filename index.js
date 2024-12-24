const apiKey = 'YOUR_API_KEY'; 
const city = 'Kyiv'; 

async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`
    );
    if (!response.ok) {
      throw new Error('Не вдалося отримати дані про погоду');
    }
    const data = await response.json();
    document.getElementById('city').textContent = data.name;
    document.getElementById('temperature').textContent = Math.round(data.main.temp);
    document.getElementById('description').textContent = data.weather[0].description;
  } catch (error) {
    console.error('Помилка:', error);
    alert('Помилка при завантаженні погоди. Перевірте API ключ або інтернет-з’єднання.');
  }
}

fetchWeather();


