import mongoose from "mongoose";

const diaryEntrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Other fields related to the diary entry
});

const DiaryEntry = mongoose.model('DiaryEntry', diaryEntrySchema);

export default DiaryEntry
