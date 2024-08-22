import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the blog post'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content for the blog post'],
  },
  author: {
    type: String,
    required: [true, 'Please provide author for the blog post'],
  }
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
