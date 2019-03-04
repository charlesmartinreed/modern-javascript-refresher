const http = new easyHTTP;

// GET POSTS
// by passing in a callback, we're handling this asynchronously
// without the callback, the log occurs BEFORE the posts have been fetched
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
// 	if(err) {
// 		// error handling
// 		console.log(err);
// 	} else {
// 		console.log(posts);
// 	}
// });

//Grab a single post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
// 	if(err) {
// 		// error handling
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// MAKE A POST REQUEST
const data = {
	title: 'Custom Post',
	body: 'This is a custom post'
};

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// // UPDATE POST
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

// DELETE POST
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
	if (err) {
		console.log(err);
	} else {
		console.log(response);
	}
});
