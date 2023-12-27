import DiaryEntry from '../models/diary.model.js';
import User from '../models/user.model.js';

const addArticles = async (req, res, next) => {
  try {
    const { username, title, description, date } = req.body;

    // Check if the username exists in the User model
    const userExists = await User.exists({ username });

    if (!userExists) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    // Find or create the diary entry based on the username
    let diaryEntry = await DiaryEntry.findOne({ username });

    if (!diaryEntry) {
      // If no diary entry exists for the username, create a new one
      diaryEntry = new DiaryEntry({
        username,
        articles: {
          titles: [title],
          descriptions: [description],
          dates: [date]
        }
      });
    } else {
      // If a diary entry exists, update the articles
      diaryEntry.articles.titles.push(title);
      diaryEntry.articles.descriptions.push(description);
      diaryEntry.articles.dates.push(date);
    }

    // Save the updated/created diary entry
    await diaryEntry.save();

    // Return a success message or any specific response as needed
    res.status(200).json({ message: 'Article added successfully', diaryEntry });
  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
};
0
export default addArticles;
