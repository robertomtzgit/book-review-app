const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

const users = [];

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });

    res.json({ message: 'User registered successfully' });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: 'Invalid password' });

    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
