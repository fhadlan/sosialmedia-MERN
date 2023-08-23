import mongoose from "mongoose";

const connect = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connect;
