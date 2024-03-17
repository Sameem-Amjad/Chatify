import mongoose from "mongoose";

const connectToMongoDB = async () => {
	const mongoDBUri = process.env.MONGO_DB_URI;
	
	try {
		await mongoose.connect(mongoDBUri);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB; 
