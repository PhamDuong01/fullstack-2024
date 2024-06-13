import { useState } from 'react';
import PersonForm from './PersonForm';
import Person from './Person';
import Filter from './Filter';
import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filtPersons, setFiltPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filtPerson, setFiltPerson] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/persons').then((response) => {
            const data = response.data;
            setPersons(data);
            setFiltPersons(data);
        });
    }, []);

    const addNew = (event) => {
        event.preventDefault();
        if (persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const newList = [...persons];
        const newPersonAdd = { name: newName, number: newNumber, id: persons.length + 1 };
        newList.push(newPersonAdd);
        axios.post('http://localhost:3001/persons', newPersonAdd).then(() => {
            setPersons(newList);
            setFiltPersons(newList);
            setNewName('');
            setNewNumber('');
        });
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
