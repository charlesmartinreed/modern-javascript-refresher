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
		getItems: (() => {
			return data.items;
		}),
		logData: (() => {
			return data;
		})
	}
})();

// UI CONTROLLER
const UICtrl = (() => {
	const UISelectors = {
		itemList: '#item-list'
	}

	return {
		populateItemList: ((items) => {
			//loop through items, make into an li, add to the DOM
			let html = '';
			items.forEach((item) => {
				html += `
					<li class="collection-item" id="item-${item.id}">
						<strong>${item.name}: </strong>
						<em>${item.calories}: </em>
						<a href="#" class="secondary-content">
							<i class="edit-item fa fa-wrench"></i>
						</a>
					</li>
				`;
			});
			// Insert list into DOM
			document.querySelector(UISelectors.itemList).innerHTML = html;
		})
	}

})();

// APP CONTROLLER
const App = ((ItemCtrl, UICtrl) => {
	// returns the init; things that run when the app begins

	return {
		init: (() => {
			// get the items from data structure
			const items = ItemCtrl.getItems();

			// populate list with items using UICtrl
			UICtrl.populateItemList(items);
		})
	}

})(ItemCtrl, UICtrl);

// Initalize app
App.init();
