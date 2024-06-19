import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    content: { type: String, required: true },
    timestamp: { type: Date, required: true}
  });

const unitModel = mongoose.model("unit", userSchema);

export default unitModel;