import mongoose from "mongoose";

const foodsSchema = new mongoose.Schema({
  likes: [String],
  dislikes: [String],
  _id: false, // ohne _id:false fügt mir mongoose für dieses "Unterdokument" eine _id hinzu
});

const userLogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  locations: [String],
  dateStart: String,
  dateEnd: String,
  img: [String],
  text: {
    type: String,
    required: true,
  },
});

const userLogModel = mongoose.model("userLog", userLogSchema);

export default userLogModel;
