// Instantiate classes
const github = new Github;
const ui = new UI;

// DOM VARIABLES
const searchInput = document.getElementById('searchUser');

// EVENT LISTENERS
searchInput.addEventListener('keyup', (e) => {
	// Grab the input text
	const searchInputValue = e.target.value;

	if (searchInputValue !== '') {
		// MAKE AN HTTP CALL to GitHub API
		github.getUser(searchInputValue)
			.then(data => {
				// handling 'user not found'
				if(data.profile.message === 'Not Found') {
					// Show alert noting that user was not found, otherwise, show the profile
					ui.showAlert('User not found', 'alert alert-danger');
				} else {
					//show profile
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			})
		} else {
			// clear the profile when the searchValueInput is empty
			ui.clearProfile();
		}
});
