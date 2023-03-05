import mongoose from "mongoose"

mongoose.set('strictQuery', true);
const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@crud-app.1iytsjt.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("database connected successfully");
    }
    catch (error) {
        console.log('Error while connecting with database', error)
    }
}
export default Connection;