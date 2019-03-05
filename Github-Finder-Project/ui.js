class UI {
	constructor() {
		this.profile = document.getElementById('profile');
}

	showProfile(user){
		// build our html template and insert it into profile on the DOM
		this.profile.innerHTML = `
			<div class="card card-body mb-3">
				<div class="row">

					<div class="col-md-3">
						<img class="img-fluid mb-2" src="${user.avatar_url}">
						<a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
					</div>

					<div class="col-md-9">
						<span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
						<span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
						<span class="badge badge-success">Followers: ${user.followers}</span>
						<span class="badge badge-info">Following: ${user.following}</span>

						<br><br>
						<ul class="list-group">
							<li class="list-group-item">Company: ${user.company}</li>
							<li class="list-group-item">Website/Blog: ${user.blog}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Member Since: ${user.created_at}</li>
						</ul>
					</div>
			</div>
		</div>
		<h3 class="page-heading mb-3">Latest Repos</h3>
		<div id="repos"></div>
		`;
	}

	// OCCURS WHEN NO USER FOUND
	showAlert(message, className) {
		//clear any remain alerts before displaying new ones
		this.clearAlert();

		// create a div, grab parent element, grab sibling, insert div before elements
		const div = document.createElement('div');
		div.className = className;
		div.appendChild(document.createTextNode(message));

		const container = document.querySelector('.searchContainer');
		const search = document.querySelector('.search');
		container.insertBefore(div, search);

		setTimeout(() => {
			this.clearAlert();
		}, 2000)
	}

	// PREVENT ALERTS FROM PILING UP IN THE DOM
	clearAlert() {
		const currentAlert = document.querySelector('.alert');
		if(currentAlert) {
			//remove it
			currentAlert.remove();
		}
	}

	// CLEAR PROFILE INFO FROM DOM
	clearProfile() {
		this.profile.innerHTML = '';
	}
}
