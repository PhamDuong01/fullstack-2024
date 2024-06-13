import { useState } from 'react';
import PersonForm from './PersonForm';
import Person from './Person';
import Filter from './Filter';
import { useEffect } from 'react';
import axios from 'axios';
import phonebookServices from './services/phonebook.js';
import Notification from './Notification.jsx';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filtPersons, setFiltPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [filtPerson, setFiltPerson] = useState('');
    const [message, setMessage] = useState({});

    const getDAta = async () => {
        const res = await phonebookServices.getAll();
        setPersons(res.data);
        setFiltPersons(res.data);
    };

    useEffect(() => {
        getDAta();
    }, [persons]);

    const showNotification = (status, message) => {
        setMessage({ status: status, message: message });
        setTimeout(() => {
            setMessage({});
        }, 5000);
        setNewName('');
        setNewNumber('');
    };

    const addNew = (event) => {
        event.preventDefault();
        const personData = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
        if (personData) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                personData.number = newNumber;
                phonebookServices.update(personData.id, personData);
                showNotification('success', `Changed number of ${newName}`);
            }
            return;
        }
        const newList = [...persons];
        let newPersonAdd = { name: newName, number: newNumber, id: `${persons.length + 1}` };
        newList.push(newPersonAdd);
        axios.post('http://localhost:3001/persons', newPersonAdd).then(() => {
            setPersons(newList);
            setFiltPersons(newList);
            showNotification('success', `added ${newName}`);
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

    const handleDelete = (event) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            const id = event.target.dataset.id;
            phonebookServices.delete(id);
            getDAta();
            showNotification('success', 'Deleted successfully');
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification info={message} />

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
            <Person persons={filtPersons} onDeleteClick={handleDelete} />
        </div>
    );
};

export default App;
