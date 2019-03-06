// Initialize objects
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather());


// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;

	weather.changeLocation(city, state);
	//save updated location in storage
	storage.setLocationData(city, state);

	// Get and display weather
	getWeather();

	// Close the modal with jQuery
	$('#locModal').modal('hide');
});

function getWeather() {
	weather.getWeather()
		.then(results => {
			ui.display(results);
		})
		.catch(err => console.log(err))
}
