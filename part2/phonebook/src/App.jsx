import { useState } from 'react';

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '123456789' }]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const addNew = (event) => {
        event.preventDefault();
        if (persons.find((person) => person.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return;
        }
        const newList = [...persons];
        newList.push({ name: newName, number: newNumber });
        setPersons(newList);
        setNewName('');
        setNewNumber('');
    };

    const handleNameInput = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberInput = (event) => {
        setNewNumber(event.target.value);
    };

    return (
        <div>
            <h2>Phonebook</h2>
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
            {persons.map((person) => {
                return (
                    <p key={person.name}>
                        {person.name}-{person.number}
                    </p>
                );
            })}
        </div>
    );
};

export default App;
