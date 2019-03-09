// STORAGE CONTROLLER

// ITEM CONTROLLER
const ItemCtrl = (() => {
	// constructor creates item so we can add it to the Data structure / State
	const Item = ((id, name, calories) => {
		this.id = id;
		this.name = name;
		this.calories = calories;
	});

	// Data structure / State
	const data = {
		items: [
			{ id: 0, name: 'Steak Dinner', calories: 1200 },
			{ id: 1, name: 'Cookie Dough Ice Cream', calories: 600 },
			{ id: 2, name: 'Eggs and Toast', calories: 400 }
		],
		currentItem: null,
		totalCalories: 0
	}

	return {
		logData: (() => {
			return data;
		})
	}
})();

// UI CONTROLLER
const UICtrl = (() => {

	return {}

})();

// APP CONTROLLER
const App = ((ItemCtrl, UICtrl) => {
	// returns the init; things that run when the app begins

	return {
		init: (() => {
			// get the items
		})
	}

})(ItemCtrl, UICtrl);

// Initalize app
App.init();
