import mongoose from 'mongoose';
import 'dotenv/config';

// mongoose.set('tristQuery', false);

const url = process.env.MONGODB_URI;

console.log('connecting to', url);

mongoose
    .connect(url)
    .then((result) => {
        console.log('connected to MongoDB');
    })
    .catch((err) => {
        console.log('error connecting to MongoDB: ', err.message);
    });

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
});

phonebookSchema.set('toJSON', {
    transform: (document, returnObject) => {
        returnObject.id = returnObject._id.toString();
        delete returnObject._id;
        delete returnObject.__v;
    },
});

const Phonebook = mongoose.model('Phonebook', phonebookSchema);
export default Phonebook;
