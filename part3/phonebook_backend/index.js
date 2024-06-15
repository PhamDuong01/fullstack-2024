import express from 'express';

let persons = [
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
    {
        id: 5,
        name: 'Duong',
        number: '39-23-6423122',
    },
];

const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/api/persons', (req, res) => {
    res.status(200).json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = persons.find((person) => person.id === id);
    if (!data) return res.status(404).send('not found');
    return res.json(data);
});

app.delete('/api/persons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    persons = persons.filter((person) => person.id !== id);
    return res.status(204).end();
});

app.get('/info', (req, res) => {
    const time = new Date();
    const data = JSON.stringify(`
        ${Date.now().toLocaleString()}
        `);

    return res.status(200).send(`
        <div>
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${time}</p>
        </div>`);
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
