import axios from 'axios';

export default axios.create({
	// The url of the server.
	baseURL: 'http://localhost:5001',
});
