// Factory pattern
// create interfaces for create objects, allow subclasses to determine which classes to instantiate
// often uses in libraries to manipulate objects that are largely the same, but have notably different characteristics - ex: a membership with different tiers.

function MemberFactory() {
	this.createMember = function(name, type) {
		let member;

		//check the type passed in, use that type to create a certain type of membership
		switch (type) {
			case 'simple':
			member = new SimpleMembership(name);
			break;
			case 'standard':
			member = new StandardMembership(name);
			break;
			case 'super':
			member = new SuperMembership(name);
			break;
		}
		member.type = type;

		// spit out name, type and cost of membership
		member.define = function() {
			console.log(`${this.name} (${this.type}): ${this.cost}`);
		}

		return member;
	}
}

const SimpleMembership = function(name) {
	this.name = name;
	this.cost = '$5';
}

const StandardMembership = function(name) {
	this.name = name;
	this.cost = '$15';
}

const SuperMembership = function(name) {
	this.name = name;
	this.cost = '$25';
}

const members = [];

//define our factory
const factory = new MemberFactory();
members.push(factory.createMember('Jane Doe', 'simple'));
members.push(factory.createMember('Thomas Jane', 'super'));
members.push(factory.createMember('Dylan Thomas', 'standard'));
members.push(factory.createMember('Bob Dylan', 'super'));

members.forEach(function(member){
	member.define();
});
