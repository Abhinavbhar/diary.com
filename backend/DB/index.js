import mongoose from "mongoose";
const dbConnect = async () => {
  const url = process.env.MONGO_DB_URL
  const name = process.env.DB_NAME
  try {
    const connectionInstance = await mongoose.connect(url)
    console.log(`connection successfully established ${name}`)
  }
  catch {
    const error = (e) => {
      console.log("connection failed error :", e)
      process.exit(1)
    }

  }
}
export default dbConnect