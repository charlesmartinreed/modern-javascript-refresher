document.querySelector('#button1').addEventListener('click', getText);
document.querySelector('#button2').addEventListener('click', getJSON);
document.querySelector('#button3').addEventListener('click', getAPIData);

// GRAB LOCAL TXT DATA
function getText() {

	// Fetch returns promises, so we need to use .then to handle that
	fetch('test.txt')
		.then(function(res){
			//res is a prototype that has many properties, including status, json, text, etc. It also returns a promise, so we return out of our current function and use . t hen
			return res.text();
		})
		.then(function(data) {
			//at this point, we've got the data itself so we can start working with it
			document.querySelector('#output').innerHTML = `<p>${data}</p>`;
		})
		.catch(function(err){
			console.log(err);
		});
}

// GRAB LOCAL JSON DATA
function getJSON() {
	let output = '';

	fetch('posts.json')
		.then(function(resp) {
			return resp.json();
		})
		.then(function(jsonData) {
			jsonData.forEach(function(post) {
				let html = `
				<h3>${post.title}</h3>
				<p>${post.body}</p>
				`
				output += html
			})
			document.querySelector('#output').innerHTML = output;
		})
    .catch(function(err){
			console.log(err);
		});
}

// GRAB EXTERNAL API DATA
function getAPIData() {
	fetch('https://api.github.com/users')
		.then(function(resp) {
			return resp.json();
		})
		.then(function(jsonData) {
			let output = '';
			jsonData.forEach(function(user) {

				output += `
				<p>${user.login}<p>
				<img src="${user.avatar_url}"
				`
			})
			document.querySelector('#output').innerHTML = output;
		})
    .catch(function(err){
			console.log(err);
		});
}
