/**

EASYHTTP v2

**/

class EasyHTTP {
	// MAKES AN HTTP GET REQUEST
	get(url) {
		// wrap our fetch in a promise
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(res => res.json())
				// now, instead of just returning data, we call resolve and pass it in data
				.then(data => resolve(data))
				// ...and reject for the error
				.catch(err => reject(err));
		});
	}

	// MAKES AN HTTP POST REQUEST
	post(url, data) {
		return new Promise((resolve, reject) => {
			// note the way that we create the object to pass along with our fetch for a POST
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err));
		});
	}

	// MAKES A HTTP PUT REQUEST
	put(url, data) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res => res.json())
				.then(data => resolve(data))
				.catch(err => reject(err))
		});
	}

	// MAKES A HTTP DELETE REQUEST
	delete(url) {
		return new Promise((resolve, reject) => {
			fetch(url, {
				method: 'PUT',
				headers: {
					'Content-type': 'application/json'
				}
			})
				.then(res => res.json())
				.then(() => resolve('Resource was deleted'))
				.catch(err => reject(err))
		});
	}
}
