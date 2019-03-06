class Weather {
	constructor(city, state) {
		this.api_key = '29a2da783f3475bc49ac56bc288e0f95';
		this.city = city;
		this.state = state;
	}

	// FETCH from api
	async getWeather() {
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.api_key}`);

		const responseData = await response.json();

		return responseData;
	}

	// Change the weather location
	changeLocation(city, state) {
		this.city = city;
		this.state = state;

	}
}
