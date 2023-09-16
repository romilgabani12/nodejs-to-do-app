import mongoose from 'mongoose';



export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Backend_API"
    })
        .then(() =>
            console.log("Database is Connected"))
        .catch((e) => {
            console.log(e);
        })
}