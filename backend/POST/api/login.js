app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid credentials.' });
    }
    res.json({ success: true, user });
  });
  