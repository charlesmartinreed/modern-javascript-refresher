class Github {
	constructor() {
		this.client_ID = '6d3b5f2825745541307b';
		this.client_secret = 'ecef021e43c97d2b8c92ec0f8ba7d6a0458e48fa';
		this.repos_count = 5;
		this.repos_sort = 'created: asc';
	}

	// CLASS METHODS
	async getUser(user) {
		let urlUserProfile = `https://api.github.com/users/${user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`

		let urlUserRepos = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`

		// make request to get the user
		const profileResponse = await fetch(urlUserProfile);

		// make request to get the user repos
		const reposResponse = await fetch(urlUserRepos);

		const profile = await profileResponse.json();
		const repos = await reposResponse.json();
		return {
			// in ES6, profile is inferred as profile: profile
			profile,
			repos
		}
	}
}
