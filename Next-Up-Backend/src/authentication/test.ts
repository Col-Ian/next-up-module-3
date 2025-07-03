// JWT Example
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

function signToken(payload, expirationTimestamp) {
	try {
		const now = Math.floor(Date.now() / 1000); // Current time in seconds
		const tokenPayload = {
			...payload,
			createdAt: now,
			expiresAt: expirationTimestamp,
		};

		// Note: We don't use expiresIn option anymore, we'll verify expiration manually
		const token = jwt.sign(tokenPayload, secretKey);
		return token;
	} catch (error) {
		console.error('Error signing token:', error.message);
		throw error;
	}
}

function verifyToken(token, currentTimestamp) {
	try {
		const decoded = jwt.verify(token, secretKey);

		// Manual expiration check
		if (currentTimestamp > decoded.expiresAt) {
			throw new Error('Token has expired');
		}

		return decoded;
	} catch (error) {
		console.error('Error verifying token:', error.message);
		throw error;
	}
}

// Example usage:
const userPayload = {
	userId: '123',
	username: 'john_doe',
	role: 'user',
};

// Create timestamps (in seconds)
const now = Math.floor(Date.now() / 1000);
const expiresAt = now + 60 * 60; // 1 hour from now

// Sign a token
const token = signToken(userPayload, expiresAt);
console.log('Generated Token:', token);

// Verify the token (simulating current time)
const decodedToken = verifyToken(token, now);
console.log('Decoded Token:', decodedToken);

// Simulate verifying an expired token
const futureTime = now + 2 * 60 * 60; // 2 hours from now
try {
	verifyToken(token, futureTime);
} catch (error) {
	console.log('Expected error when token expired:', error.message);
}

// Middleware example. In your case the middleware will authenticate, and add the token payload to the request, not the current time like in this basic example.
const express = require('express');
const app = express();

// Middleware that adds a timestamp to the request
const addTimestamp = (req, res, next) => {
	// Add current timestamp to the request object
	req.timestamp = new Date().toISOString();

	// Continue to the next middleware/route handler
	next();
};

// Use the middleware for all routes
app.use(addTimestamp);

// Route that uses the decorated request
app.get('/hello', (req, res) => {
	res.json({
		message: 'Hello!',
		requestTime: req.timestamp,
	});
});

app.listen(3000, () => {
	console.log('Server running on port 3000');
});

// HTTP only cookie example. In your case you will just set the cookie in your login function rather than creating these endpoints. This is just an example.
const express = require('express');
const app = express();

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
	// Set an HTTP-only cookie named 'sessionId'
	res.cookie('sessionId', '12345', {
		httpOnly: true, // Makes the cookie inaccessible to JavaScript
		secure: true, // Only sends cookie over HTTPS
		maxAge: 3600000, // Cookie expires in 1 hour (in milliseconds)
		sameSite: 'strict', // Protects against CSRF
	});

	res.send('Cookie has been set!');
});

// Route to verify the cookie
app.get('/get-cookie', (req, res) => {
	const sessionId = req.cookies.sessionId;
	if (sessionId) {
		res.send(`Cookie value: ${sessionId}`);
	} else {
		res.send('No cookie found');
	}
});

// Don't forget to use cookie-parser middleware
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Start the server
app.listen(3000, () => {
	console.log('Server running on http://localhost:3000');
});
