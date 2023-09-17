import mongoose from 'mongoose';



export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Backend_API"
    })
        .then((c) =>
            console.log(`Database is Connected with ${c.connection.host}`))
        .catch((e) => {
            console.log(e);
        })
}