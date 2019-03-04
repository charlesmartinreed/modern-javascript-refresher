function easyHTTP() {
	this.http = new XMLHttpRequest();
}

// MAKE AN HTTP GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
	this.http.open('GET', url, true);

	// arrow functions fix this scope issue ES6 by adding a so-called 'lexical this', here we solve it by capturing the value in a variable that DOES have proper scope outside of the function block
	let self = this;
	this.http.onload = function() {
		if(self.http.status === 200) {
			// null for error, which will be passed along if the status is not 200 OK
			callback(null, self.http.responseText);
		} else {
			callback('Error: ' + self.http.status);
		}
	}

	this.http.send();
}

// MAKE AN HTTP POST REQUEST
easyHTTP.prototype.post = function(url, data, callback) {
	this.http.open('POST', url, true);

	// set the data type
	this.http.setRequestHeader('Content-type', 'application/json');

	let self = this;
	this.http.onload = function() {

		callback(null, self.http.responseText);
	}

	// need to send as JSON string, not JS object
	this.http.send(JSON.stringify(data));
}

// MAKE AN HTTP PUT REQUEST
easyHTTP.prototype.put = function(url, data, callback) {
	this.http.open('PUT', url, true)
	this.http.setRequestHeader('Content-type', 'application/json');

	let self = this;
	this.http.onload = function() {
		callback(null, self.http.responseText);
	}

	this.http.send(JSON.stringify(data));
}



// MAKE AN HTTP DELETE REQUEST
easyHTTP.prototype.delete = function(url, callback) {
	this.http.open('DELETE', url, true);

	let self = this;
	this.http.onload = function() {
		if(self.http.status === 200) {
			callback(null, 'Post Deleted');
		} else {
			callback('Error: ', self.http.status);
		}
	}
	this.http.send();
}
