import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdOn: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);
export default Post;
