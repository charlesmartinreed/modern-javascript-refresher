// subscribe/unsubscribe to different events that happen during the lifetime of your app

// ES6 version

class EventObserver {
	constructor() {
		//functions passed into into EventObserver
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
		console.log(`You are now subscribed to ${fn.name}`);
	}

	unsubscribe(fn) {
		this.observers = this.observers.filter(function(item){
			if(item !== fn) {
				//return an array containing everything EXCEPT the unsubscribe, assign that to observers array, thereby updating it
				return item;
			}
		});
		console.log(`You are now unsubscribed from ${fn.name}`);
	}

	fire() {
		this.observers.forEach(function(obs) {
			//call() calls the function with a given this value and individually provided arguments, though we're not passing those in right now.
			obs.call();
		});
	}
}

// instantiate EventObserver
const click = new EventObserver();

// create event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
	click.subscribe(getCurrentMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function() {
	click.unsubscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
	click.subscribe(getCurrentSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function() {
	click.unsubscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
	click.fire();
});



// click handlers
const getCurrentMilliseconds = function() {
	console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrentSeconds = function() {
	console.log(`Current Seconds: ${new Date().getSeconds()}`);
}
