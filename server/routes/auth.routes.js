const express = require('express');
const router = express.Router();
const users = require('../data/users');

router.post('/register', (req, res) => {
  try {
    const { name, email, password, dob } = req.body;

    const userExists = users.find(user => user.email === email);
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = {
      id: (users.length + 1).toString(),
      name,
      email,
      password, 
      dob
    };

    users.push(newUser);

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;