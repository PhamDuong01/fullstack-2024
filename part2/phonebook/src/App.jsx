import { useState } from 'react';
import PersonForm from './PersonForm';
import Person from './Person';
import Filter from './Filter';

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
        if (persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const newList = [...persons];
        newList.push({ name: newName, number: newNumber, id: persons.length + 1 });
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
            <Filter onHandleFiltInput={handleFiltInput} filtPerson={filtPerson} />
            <h3>Add a new</h3>
            <PersonForm
                onAddNew={addNew}
                onHandleNameInput={handleNameInput}
                onHandleNumberInput={handleNumberInput}
                newName={newName}
                newNumber={newNumber}
            />
            <h3>Numbers</h3>
            <Person persons={filtPersons} />
        </div>
    );
};

export default App;
