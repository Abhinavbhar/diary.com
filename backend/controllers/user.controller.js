import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// For password hashing and comparison

const userController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Find the user in the database by username or email
      let user = await User.findOne({ $or: [{ username }, { email: username }] });

      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }


      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid password' });
      }
      const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '24h' });
      // 'your_secret_key' should be a secret key used for signing the token
      // You can store this secret in an environment variable for better security

      res.status(200).json({ token });

      // Password is valid, user is authenticated
      // You might create a session/token for the user here

      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Other user-related controller methods
  signUp: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      console.log(req.body)

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
};

export default userController;
