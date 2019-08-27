const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.code);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value;
    const code = document.getElementById('code').value;

    weather.changeLocation(city, code);
    storage.setLocationData(city, code)
    getWeather();
    $('#locModal').modal('hide');
});


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}