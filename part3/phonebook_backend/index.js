import express from 'express';

const persons = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456',
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523',
    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-43-234345',
    },
    {
        id: 4,
        name: 'Mary Poppendieck',
        number: '39-23-6423122',
    },
];

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/persons', (req, res) => {
    res.status(200).json(persons);
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});