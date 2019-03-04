const http = new EasyHTTP;

// GET Users, asynchronously using Promises
// http.get('https://jsonplaceholder.typicode.com/users')
// 	// since our get method returns a promise, we need to use .then to catch the data and .catch to handle our error case
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

// POST User data, async with Promises
const data = {
	name: 'John Doe',
	username: 'johndoe',
	email: 'jdoe@yahoo.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));


// PUT User data, quite similar to POST
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
	.then(data => console.log(data))
	.catch(error => console.log(error));
