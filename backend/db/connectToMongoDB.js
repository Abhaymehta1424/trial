// import mongoose from "mongoose";

// const connectToMongoDB = async () => {
// 	try {
// 		await mongoose.connect(process.env.MONGO_DB_URI);
// 		console.log("Connected to MongoDB");
// 	} catch (error) {
// 		console.log("Error connecting to MongoDB", error.message);
// 	}
// };

// export default connectToMongoDB;


// /////  npm start

import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    // 👇 paste your Compass/Atlas URI here
        const mongoURI = "mongodb+srv://<login-tut>:<Abhay-1424>@chat.uieue1w.mongodb.net/";


    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

export default connectToMongoDB;
