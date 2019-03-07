// Similar to observer
// Mediators communicate with colleagues, mediated objects

class User {
	constructor(name) {
		this.name = name;
		this.chatroom = null;
	}

	send(message, to) {
		this.chatroom.send(message, this, to);
	}

	receive(message, from) {
		console.log(`${from.name} to ${this.name}: ${message}`);
	}
}

class Chatroom {
	constructor() {
		this.users = {};
	}
	// let users = {};

	register(user) {
		this.users[user.name] = user;
		user.chatroom = this;
	}

	send(message, from, to) {
		if(to) {
			to.receive(message, from);
		} else {
			let users = this.users;
			let keys = Object.keys(users);
			keys.forEach(function(key){
				if(key !== from.name) {
					// console.log(users[key]);
					users[key].receive(message, from);
				}
			})
		}
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
