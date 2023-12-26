import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

// For password hashing and comparison

async function login(req, res, next) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Password is valid, you can proceed with further actions or response handling
    // For simplicity, let's just send a success message and the user details
    res.status(200).json({
      message: 'Login successful',
      user: {
        _id: user._id,
        username: user.username,
        // Include other user details as needed
      }
    });

  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
}

export default login