const apiKey = '2a63140595424504193ee8c99d1bfaf4';

const searchButton = document.getElementById('search-button');
const searchBox = document.getElementById('search-box');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const city = searchBox.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                cityElement.textContent = data.name;
                temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
                descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
            })
            .catch(error => {
                console.error('Error:', error);
                cityElement.textContent = 'City not found';
                temperatureElement.textContent = '';
                descriptionElement.textContent = '';
            });
    }
});
