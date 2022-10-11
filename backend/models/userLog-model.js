import mongoose from "mongoose";
// import imageSchema from "../../imageDb/model.js"

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
  // img: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: imageSchema,
  // }],
  text: {
    type: String,
    required: true,
  },
});

const userLogModel = mongoose.model("userLog", userLogSchema);

export default userLogModel;
