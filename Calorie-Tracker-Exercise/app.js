// STORAGE CONTROLLER

// ITEM CONTROLLER
const ItemCtrl = (() => {
	// constructor creates item so we can add it to the Data structure / State
	// const Item = function(id, name, calories) {
	// 	this.id = id;
	// 	this.name = name;
	// 	this.calories = calories;
	// };

	function Item(id, name, calories) {
			this.id = id;
			this.name = name;
			this.calories = calories;
	};

	// Data structure / State
	const data = {
		items: [
			// { id: 0, name: 'Steak Dinner', calories: 1200 },
			// { id: 1, name: 'Cookie Dough Ice Cream', calories: 600 },
			// { id: 2, name: 'Eggs and Toast', calories: 400 }
		],
		currentItem: null,
		totalCalories: 0
	}

	return {
		getItems: (() => {
			return data.items;
		}),
		addItem: ((name, calories) => {
			let ID;
			//generate an ID for item
			if(data.items.length > 0) {
				ID = data.items[data.items.length - 1].id + 1;
			} else {
				ID = 0;
			}
			//Calories to number
			calories = parseInt(calories);

			// Create a new Item using our constructor and push it onto the data structure
			newItem = new Item(ID, name, calories);
			data.items.push(newItem);

			// return the newItem so it can be used in UICtrl to add to the DOM
			return newItem;
		}),
		getTotalCalories: (() => {
			let calCount = 0;
			data.items.forEach((item) => {
				calCount += item.calories;
			})
			data.totalCalories = calCount;

			return data.totalCalories;
		}),
		logData: (() => {
			return data;
		})
	}
})();

// UI CONTROLLER
const UICtrl = (() => {
	const UISelectors = {
		itemList: '#item-list',
		itemNameInput: '#item-name',
		itemCaloriesInput: '#item-calories',
		totalCalories: '.total-calories',
		addBtn: '.add-btn',
	}

	return {
		populateItemList: ((items) => {
			//loop through items, make into an li, add to the DOM
			let html = '';
			items.forEach((item) => {
				html += `
					<li class="collection-item" id="item-${item.id}">
						<strong>${item.name}: </strong>
						<em>${item.calories} </em>
						<a href="#" class="secondary-content">
							<i class="edit-item fa fa-wrench"></i>
						</a>
					</li>
				`;
			});
			// Insert list into DOM
			document.querySelector(UISelectors.itemList).innerHTML = html;
		}),
		getItemInput: (() => {
			return {
				name: document.querySelector(UISelectors.itemNameInput).value,
				calories: document.querySelector(UISelectors.itemCaloriesInput).value
			}
		}),
		addListItem: ((item) => {
			document.querySelector(UISelectors.itemList).style.display = 'block';
			// create a li element
			const li = document.createElement('li');
			li.className = 'collection-item'
			li.id = `item-${item.id}`;

			//create HTML and insert item
			li.innerHTML = `
			<strong>${item.name}: </strong>
			<em>${item.calories} </em>
			<a href="#" class="secondary-content">
				<i class="edit-item fa fa-wrench"></i>
			</a>`;

			document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
		}),
		clearInputs: (() => {
			document.querySelector(UISelectors.itemNameInput).value = '';
			document.querySelector(UISelectors.itemCaloriesInput).value = '';
		}),
		hideList: (() => {
			document.querySelector(UISelectors.itemList).style.display = 'none';
		}),
		showTotalCalories: ((totalCalories) => {
			document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
		}),
		getSelectors: (() => {
			return UISelectors;
		})
	}

})();

// APP CONTROLLER
const App = ((ItemCtrl, UICtrl) => {
	// Load event listeners
	const loadEventListeners = (() => {
		const UISelectors = UICtrl.getSelectors();

		// Add item event(s)
		document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
	});

	// Add item submit
	const itemAddSubmit = ((e) => {
			// check that there's something in the form input
			const input = UICtrl.getItemInput();

			if(input.name !== '' && input.calories !== '') {
				//Add the item using our Item Controller and then add to the UI
				const newItem = ItemCtrl.addItem(input.name, input.calories)
				UICtrl.addListItem(newItem);

				// get the total calories and display it on the DOM
				const totalCalories = ItemCtrl.getTotalCalories();
				UICtrl.showTotalCalories(totalCalories);

				UICtrl.clearInputs();
			} else {
				// might try some error handling here
			}

			// clear out the entry fields
			e.preventDefault();
	})

	// returns the init; things that run when the app begins

	return {
		init: (() => {
			// get the items from data structure
			const items = ItemCtrl.getItems();

			// Check if any items
			if(items.length === 0) {
				UICtrl.hideList();
			} else {
				// populate list with items using UICtrl
				UICtrl.populateItemList(items);
			}

			// get the total calories and display it on the DOM
			const totalCalories = ItemCtrl.getTotalCalories();
			UICtrl.showTotalCalories(totalCalories);

			// load our event listeners
			loadEventListeners();
		})
	}

})(ItemCtrl, UICtrl);

// Initalize app
App.init();
