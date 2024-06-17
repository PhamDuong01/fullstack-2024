import { useState } from 'react';
import PersonForm from './PersonForm';
import Person from './Person';
import Filter from './Filter';
import { useEffect } from 'react';
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
        if (res) {
            setPersons(res);
            setFiltPersons(res);
        }
    };

    useEffect(() => {
        getDAta();
    }, []);

    const showNotification = (status, message) => {
        setMessage({ status: status, message: message });
        setTimeout(() => {
            setMessage({});
        }, 5000);
        setNewName('');
        setNewNumber('');
    };

    const addNew = async (event) => {
        event.preventDefault();
        const personData = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
        if (personData) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                personData.number = newNumber;
                let data = await phonebookServices.update(personData.id, personData);
                if (data) {
                    showNotification('success', `Changed number of ${newName}`);
                } else {
                    showNotification('error', `${newName} has been removed on server`);
                }
            }
        } else {
            try {
                const newList = await phonebookServices.getAll();
                let newPersonAdd = { name: newName, number: newNumber };
                const data = await phonebookServices.create(newPersonAdd);
                if (data) {
                    newList.push(data);
                    setPersons(newList);
                    setFiltPersons(newList);
                    showNotification('success', `added ${newName}`);
                }
            } catch (error) {
                showNotification('error', `can not add ${newName}`);
            }
        }
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

    const handleDelete = async (event) => {
        if (window.confirm('Are you sure you want to delete ?')) {
            const id = event.target.dataset.id;
            let data = await phonebookServices.delete(id);
            if (data.id) {
                setPersons(persons.filter((person) => person.id != id));
                setFiltPersons(persons.filter((person) => person.id != id));
                showNotification('success', `Deleted ${data.name} successfully`);
                return;
            } else {
                showNotification(
                    'error',
                    `Information of ${
                        persons.find((person) => {
                            return person.id === id;
                        }).name
                    } has already been remove from server`
                );
            }
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
