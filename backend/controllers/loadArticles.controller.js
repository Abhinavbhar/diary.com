import DiaryEntry from '../models/diary.model.js';

const loadArticlesByUser = async (req, res, next) => { // Include 'next' parameter here
  try {
    const { username } = req.query;
    console.log(username)

    // Check if the username exists in the User model
    const userExists = await DiaryEntry.exists({ username });

    if (!userExists) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    // Find or create the diary entry based on the username
    let diaryEntry = await DiaryEntry.findOne({ username });

    // Return a success message or any specific response as needed
    res.status(200).json({ diaryEntry });
  } catch (error) {

    res.status(500).json({ error: 'Unable to load articles' });
  }
};

export default loadArticlesByUser;
