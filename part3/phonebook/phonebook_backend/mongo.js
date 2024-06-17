import mongoose from 'mongoose';

if (process.argv.length < 3) {
    console.log('give password as argument');
    process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://admin:${password}@cluster0.qxoz6nz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set('strictQuery', false);

mongoose.connect(url);

const phonebookSchema = new mongoose.Schema({
    name: String,
    number: String,
});
const Phonebook = mongoose.model('Phonebook', phonebookSchema);

if (process.argv.length < 5) {
    Phonebook.find({}).then((phonebook) => {
        console.log('Phonebook:');
        phonebook.map((person) => {
            console.log(`${person.name} ${person.number}`);
        });
        mongoose.connection.close();
    });
} else {
    const phonebook = new Phonebook({
        name: process.argv[3],
        number: process.argv[4],
    });

    phonebook.save().then((result) => {
        console.log(`added ${result.name} number ${result.number} to phonebook`);
        mongoose.connection.close();
    });
}
