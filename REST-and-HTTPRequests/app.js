// MIMICS our server/database
const posts = [
	{title: 'Post One', body: 'This is post one'},
	{title: 'Post Two', body: 'This is post two'}
];

// // SYNCHRONOUS
// function createPost(post) {
// 	//setTimeout is being used to simulate an async request to the server to return our posts
// 	setTimeout(function() {
// 		posts.push(post);
// 	}, 2000);
// }
//
// function getPosts() {
// 	setTimeout(function() {
// 		let output = '';
// 		posts.forEach(function(post){
// 			output += `<li>${post.title}</li>`
// 		});
// 		document.body.innerHTML = output;
// 	}, 1000);
// }
//
// // 1. Create the post
// // 2. Get the posts AFTER
// createPost({title: 'Post Three', body: 'This is post three'});
//
// getPosts(); //this actually occurs first in our normal call

//ASYNCHRONOUS

function createPost(post, callback) {
	//setTimeout is being used to simulate an async request to the server to return our posts
	setTimeout(function() {
		posts.push(post);
		callback();
	}, 2000);
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

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
