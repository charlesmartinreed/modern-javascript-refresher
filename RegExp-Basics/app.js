// Using the blur event to trigger our validation - occurs when element loses focus
document.querySelector('#name').addEventListener('blur', validateInput);
document.querySelector('#zip').addEventListener('blur', validateInput);
document.querySelector('#email').addEventListener('blur', validateInput);
document.querySelector('#phone').addEventListener('blur', validateInput);

function validateInput(e) {
	const target = document.getElementById(`${e.target.id}`);
	const targetId = e.target.id;
	let re;

	switch (targetId) {
		case 'name':
			re = /^[A-Za-z]{2,10}$/;
			break;
		case 'zip':
			re = /^[0-9]{5}(-[0-9]{4})?$/;
			break;
		case 'email':
			re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;
			break;
		case 'phone':
			re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
			break;
	}

	if(!re.test(target.value)) {
		target.classList.add('is-invalid');
	} else {
		target.classList.remove('is-invalid');
	}
}
