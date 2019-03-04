const http = new EasyHTTP;

// GET Users, asynchronously using async/await
// http.get('https://jsonplaceholder.typicode.com/users')
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));


// POST User data, async with Promises
const data = {
	name: 'John Doe',
	username: 'johndoe',
	email: 'jdoe@yahoo.com'
}

// POST Users, asynchronously using async/await
// http.post('https://jsonplaceholder.typicode.com/users', data)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err));

// PUT Users, asynchronously using async/await
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error));

// Delete User, asynchronously using async/await
http.delete('https://jsonplaceholder.typicode.com/users/2')
	.then(data => console.log(data))
	.catch(error => console.log(error));
