import DiaryEntry from "../models/diary.model.js";
const loadArticles = async (req, res) => {
  try {
    const articles = await DiaryEntry.find({}); // Fetch all diary entries

    res.status(200).json({ articles });
  } catch (error) {

    res.status(500).json({ error: 'Unable to load articles' });
  }
};

export default loadArticles;