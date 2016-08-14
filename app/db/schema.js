import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String
});

// the collection's name is `articles`
const Article = mongoose.model('Article', articleSchema);

export {
  Article
};