app.post('/api/signup', async (req, res) => {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username already taken.' });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ success: true, message: 'User registered successfully.' });
  });
  