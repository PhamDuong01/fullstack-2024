import { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    ]);
    const [filtPersons, setFiltPersons] = useState(persons);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filtPerson, setFiltPerson] = useState('');

    const addNew = (event) => {
        event.preventDefault();
        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const newList = [...persons];
        newList.push({ name: newName, number: newNumber });
        setPersons(newList);
        setFiltPersons(newList);
        setNewName('');
        setNewNumber('');
    };

    const handleNameInput = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberInput = (event) => {
        setNewNumber(event.target.value);
    };

    const handleFiltInput = (event) => {
        setFiltPerson(event.target.value);
        const filterList = event.target.value ? persons.filter((person) => person.name.includes(event.target.value)) : persons;
        setFiltPersons(filterList);
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with: <input onChange={handleFiltInput} value={filtPerson} />
            </div>
            <h2>add a new</h2>
            <form onSubmit={addNew}>
                <div>
                    name: <input onChange={handleNameInput} value={newName} />
                </div>
                <div>
                    number: <input onChange={handleNumberInput} value={newNumber} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {filtPersons.map((person) => {
                return (
                    <p key={person.id}>
                        {person.name}-{person.number}
                    </p>
                );
            })}
        </div>
    );
};

export default App;
