class Weather {
    constructor(city, code) {
        this.apiKey = 'b81b5bdd7c20b88c65f7f3c302b7a8e5';
        this.city = city;
        this.code = code;
    }

    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.code}}&APPID=${this.apiKey}`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, code) {
        this.city = city;
        this.code = code;
    }
}