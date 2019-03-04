// MIMICS our server/database
const posts = [
	{title: 'Post One', body: 'This is post one'},
	{title: 'Post Two', body: 'This is post two'}
];


//ASYNCHRONOUS, ES6 style with Promises

function createPost(post) {
	//create new Promise
	// resolve occurs in when the task executes successfully, reject is called if there's an error that needs to be thrown
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			posts.push(post);

			//const error = false; - used for testing reject cases
			if (!error) {
				resolve();
			} else {
				reject('Error: Something went wrong!')
			}
		}, 2000);
	});


}

function getPosts() {
	setTimeout(function() {
		let output = '';
		posts.forEach(function(post){
			output += `<li>${post.title}</li>`
		});
		document.body.innerHTML = output;
	}, 1000);
}

// initiate a Promise with .then
// catch our reject case with .catch - without the catch, the error would still be logged in the console
createPost({title: 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err) {
	console.log(err);
});
