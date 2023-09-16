const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.connect(process.env.DB_URL);
  console.log("db connected successfully");
};
export default dbConnect;
