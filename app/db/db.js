import mongoose from 'mongoose';

function connect() {
  mongoose.connect('mongodb://localhost/react-blog-demo');
}

function close() {
  mongoose.connection.close();
}

export default {
  connect, close
};