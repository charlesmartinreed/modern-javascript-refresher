// Singleton is an IIFE that can only be instantiated one time. All subsequent calls to the constructor will always reference the same instance.
// These are globally accessed, not encapsulated.

const Singleton = (function(){
	let instance;

	function createInstance(){
		const object = new Object({name: 'Charles'});
		return object;
	}

	return {
		getInstance: function() {
			if(!instance){
				instance = createInstance()
			}
			return instance;
		}
	}
})();

const instanceA = Singleton.getInstance();
// console.log(instanceA);

//now watch what happens when we try to instantiate again
const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB); //this is true, meaning these are the same instance
