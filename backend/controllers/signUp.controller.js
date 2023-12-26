const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving it for a new user
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    console.log(newUser)
    cosole.log(User)
    res.status(200).json({ message: 'User created successfully', User });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default signUp;