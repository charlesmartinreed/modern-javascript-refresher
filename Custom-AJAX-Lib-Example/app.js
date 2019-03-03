const http = new easyHTTP;

// GET POSTS
// by passing in a callback, we're handling this asynchronously
// without the callback, the log occurs BEFORE the posts have been fetched
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
	if(err) {
		// error handling
		console.log(err);
	} else {
		console.log(posts);
	}
});
