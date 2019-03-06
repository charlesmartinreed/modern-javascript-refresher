class UI {
	constructor() {
		this.location = document.getElementById('w-location'); //name
		this.tempString = document.getElementById('w-string'); // main[temp]
		this.description = document.getElementById('w-desc'); //weather[description]
		this.details = document.getElementById('w-details'); //
		this.icon = document.getElementById('w-icon'); // weather[icon]
		this.humidity = document.getElementById('w-humidity'); // main[humidity]
		this.feelsLike = document.getElementById('w-feels-like'); // N/A
		this.visibility = document.getElementById('w-visibility'); // N/A
		this.wind = document.getElementById('w-wind'); // wind[speed]
	}

	paint(weather) {
		const currentTempinK = Number.parseFloat(weather.main.temp);
		const currentTempinF = Math.round((currentTempinK - 273.15) * (9/5) + 32);

		const currentRelativeHumidity = weather.main.humidity;
		const windSpeedToMPH = Math.round(2.23694 * weather.wind.speed);

		const visiblityInMiles = Math.round(weather.visibility / 1609.344);

		let currentFeelsLike = '';

		// get the real feel for the current temp
		if (currentTempinF <= 50 && windSpeedToMPH >= 3) {
			//wind chill formula
			currentFeelsLike = Math.round(35.74 + (0.6215 * currentTempinF) - (35.75 * Math.pow(windSpeedToMPH, 0.16)) + (0.4275 * currentTempinF * Math.pow(windSpeedToMPH, 0.16)));
		} else if (currentTempinF >= 96) {
			currentFeelsLike = -42.379 + (2.04901523 * currentTempinF) + (10.14333127 * currentRelativeHumidity) - (0.22475541 * currentTempinF * currentRelativeHumidity) - (6.83783 * Math.pow(10, -3) * Math.pow(currentTempinF, 2)) - (5.481717 * Math.pow(10, -2) * Math.pow(currentRelativeHumidity, 2)) + (1.22874 * Math.pow(10, -3) * Math.pow(currentTempinF, 2) * currentRelativeHumidity) + (8.5282 * Math.pow(10, -4) * currentTempinF * Math.pow(currentRelativeHumidity, 2)) - (1.99 * Math.pow(10, -6) * Math.pow(currentTempinF, 2) * Math.pow(currentRelativeHumidity, 2))
		} else {
			//between 50 and 96, the feel is apparently just the temperature...
			currentFeelsLike = currentTempinF;
		}

		this.location.textContent = weather.name;
		this.tempString.textContent = `${currentTempinF}°`; //convert
		this.description.textContent = weather.weather[0].description;
		this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
		this.humidity.textContent = `Relative Humidity is ${currentRelativeHumidity}%`;
		this.feelsLike.textContent = `Feels like ${currentFeelsLike}°`
		this.visibility.textContent = `Visibility is ${visiblityInMiles} miles`;
		this.wind.textContent = `Wind Speed is ${windSpeedToMPH} MPH`

	}
}
