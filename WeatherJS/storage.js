class Storage {
	constructor() {
		this.city;
		this.state;

		// if nothing in local storage
		this.defaultCity = 'Las Vegas';
		this.defaultState = 'Nevada';
	}

	getLocationData() {
		// check to see if city and state are null, if so, use defaults
		if(localStorage.getItem('city') === null && localStorage.getItem('state') === null) {
			this.city = this.defaultCity;
			this.state = this.defaultState;
		} else {
			this.city = localStorage.getItem('city');
			this.state = localStorage.getItem('state');
		}
		return {
			city: this.city,
			state: this.state
		}
	}

	setLocationData(city, state) {
		// we're just using basic strings for this
		localStorage.setItem('city', city);
		localStorage.setItem('state', state)
	}
}
