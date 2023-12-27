import DiaryEntry from '../models/diary.model.js';

async function deleteByIndex(req, res, next) {
  try {
    const { username, date } = req.body;

    // Find the diary entry for the user
    let diaryEntry = await DiaryEntry.findOne({ username });

    if (!diaryEntry) {
      return res.status(404).json({ message: 'Entry not found' });
    }

    if (!diaryEntry.articles || !diaryEntry.articles.dates || !Array.isArray(diaryEntry.articles.dates)) {
      return res.status(404).json({ message: 'Dates array not found in the entry' });
    }

    const dateIndex = diaryEntry.articles.dates.findIndex(d => d.getTime() === new Date(date).getTime());

    if (dateIndex === -1) {
      return res.status(404).json({ message: 'Date not found in the entry' });
    }

    // Remove the title and description at the specific index
    diaryEntry.articles.titles.splice(dateIndex, 1);
    diaryEntry.articles.descriptions.splice(dateIndex, 1);
    diaryEntry.articles.dates.splice(dateIndex, 1);

    // Save the updated diary entry
    await diaryEntry.save();

    // Return success message or any specific response as needed
    res.status(200).json({ message: 'Title, description, and date deleted successfully' });

  } catch (error) {
    // Pass any errors to the error handling middleware
    next(error);
  }
}

export default deleteByIndex;
