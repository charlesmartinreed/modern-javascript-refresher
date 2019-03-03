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

// MAKE AN HTTP PUT REQUEST

// MAKE AN HTTP DELETE REQUEST
