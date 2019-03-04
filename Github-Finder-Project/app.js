// Instantiate classes
const github = new Github;

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
				} else {
					
				}
			})
		} else {
			// clear the profile when the searchValueInput is empty
		}
});
