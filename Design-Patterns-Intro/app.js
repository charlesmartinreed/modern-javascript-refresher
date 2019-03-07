// Similar to observer
// Mediators communicate with colleagues, mediated objects

// two constructor functions, one for user one for chat room
const User = function(name) {
	this.name = name;
	this.chatroom = null;
}

const Chatroom = function() {
	let users = {}; //list of users

	return {
		// colleagues must register with mediator
		register: function(user) {
			users[user.name] = user;
			user.chatroom = this; //set user to current chatroom
		}, send: function(message, from, to) {
			// is the message going to to user?
			if(to) {
				// single user message
				to.receive(message, from);
			} else {
				// Mass message
				for(key in users) {
					// make sure the key isn't the user who is sending the message
					if(users[key] !== from) {
						users[key].receive(message, from);
					}
				}
			}
		}
	}
}

User.prototype = {
	send: function(message, to) {
		this.chatroom.send(message, this, to); // this meaning user
	},
	receive: function(message, from) {
		console.log(`${from.name} to ${this.name}: ${message}`);
	}
}

// create Users - colleague
const charles = new User('Charles');
const david = new User('David');
const mika = new User('Mika');

//create chatroom - medidator
const chatroom = new Chatroom();
chatroom.register(charles);
chatroom.register(david);
chatroom.register(mika);

// try sending messages!
charles.send('Hola, como estas?', david);
mika.send('Yo! Is this thing working?', charles);
david.send('Hey chat people!');

// class User {
// 	constructor(name, chatroom) {
// 		this.name = name;
// 		this.chatroom = chatroom;
// 	}
// 	//users can send to single users or broadcast to entire chat room
// 	// chatroom is mediator, users are the colleagues
// 	send(message, to) {
// 		this.chatroom.send(message, this, to);
// 	}
//
// 	receive(message, from) {
// 		console.log(`${from.name} to ${this.name}: ${message}`);
// 	}
// }
//
// class Chatroom {
// 	constructor(users) {
// 		this.users = users;
// 	}
// }
