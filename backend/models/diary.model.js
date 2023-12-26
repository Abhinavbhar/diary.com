import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  titles: [{ type: String, required: true }],
  descriptions: [{ type: String, required: true }],
  dates: [{ type: Date, required: true }]
});

const diaryEntrySchema = new mongoose.Schema({
  articles: {
    type: articleSchema,
    required: true
  },
  username: {
    type: String,
    required: true,
    index: true
  },
  // Other fields related to the diary entry
});

const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);

export default DiaryEntry;
