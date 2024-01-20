export default function request({method, endpoint, body = null, newHeaders = null} = {}) {
	let headers = {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`
	}
	if (newHeaders) {
		headers = newHeaders;
	}
	if (!body) {
		return fetch('http://localhost:6060/api' + endpoint, {
			method: method,
			headers: headers
		}) 
	} else {
		return fetch('http://localhost:6060/api' + endpoint, {
			method: method,
			headers: headers,
			body: JSON.stringify(body)
		})
	}
}
