import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: String,
    message: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tags: { type: String, default: [] },
    fileName: String,
    likes: { type: String, default: [] },
  },
  { timestamps: true }
);

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
