// First, let's create the data that we'll iterate over
const data = [
	{
		name: 'John Doe',
		age: 32,
		gender: 'male',
		lookingFor: 'female',
		location: 'Boston, MA',
		image: 'https://randomuser.me/api/portraits/men/65.jpg'
	},
	{
		name: 'Jennifer Grey',
		age: 42,
		gender: 'female',
		lookingFor: 'male',
		location: 'Colorado Springs, CO',
		image: 'https://randomuser.me/api/portraits/women/29.jpg'
	},
	{
		name: 'Annie Clark',
		age: 34,
		gender: 'female',
		lookingFor: 'female',
		location: 'Brooklyn, NY',
		image: 'https://randomuser.me/api/portraits/women/81.jpg'
	},
];

// set up the click event listener for triggering the iterator
const profiles = profileIterator(data);

// manual call to profile loader to get first person at reload
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

// Next, create the actual iterator
function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function() {
			return nextIndex < profiles.length ?
			{ value: profiles[nextIndex++], done: false } :
			{ done: true }
		}
	};
}

function nextProfile() {
	//iterate our value
	const currentProfile = profiles.next().value;

	//place our content, if there's more profile
	if(currentProfile != undefined) {

		document.getElementById('profileDisplay').innerHTML = `
		<ul class="list-group">
			<li class="list-group-item">Name: ${currentProfile.name}</li>
			<li class="list-group-item">Age: ${currentProfile.age}</li>
			<li class="list-group-item">Location: ${currentProfile.location}</li>
			<li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor} </li>
		</ul>
		`

		document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`
	} else {
		window.location.reload();
	}

}
