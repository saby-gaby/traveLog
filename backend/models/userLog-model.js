import mongoose from "mongoose";

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
