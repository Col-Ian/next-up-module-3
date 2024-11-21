const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

const SECRET_KEY = 'your-secret-key'; // In production, use a secure environment variable

// Login route
app.post('/login', (req, res) => {
	// Authenticate user (simplified for example)
	const user = { id: 1, username: 'example' };

	// Generate JWT
	const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

	// Set JWT as HTTP-only cookie
	res.cookie('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production', // Use secure in production
		sameSite: 'strict',
		maxAge: 3600000, // 1 hour in milliseconds
	});

	res.json({ message: 'Logged in successfully' });
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
	res.json({ message: 'Access granted to protected route', user: req.user });
});

// Middleware to authenticate token
function authenticateToken(req, res, next) {
	const token = req.cookies.token;

	if (!token)
		return res.status(401).json({ message: 'Authentication required' });

	jwt.verify(token, SECRET_KEY, (err, user) => {
		if (err)
			return res.status(403).json({ message: 'Invalid or expired token' });
		req.user = user;
		next();
	});
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
