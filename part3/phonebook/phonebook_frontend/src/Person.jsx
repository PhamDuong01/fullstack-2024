const Person = ({ persons, onDeleteClick }) => {
    return persons.map((person) => (
        <div key={person.id} style={{ display: 'flex', alignItems: 'center' }}>
            <p>
                {person.name}-{person.number}
            </p>
            <button data-id={person.id} onClick={onDeleteClick} style={{ marginLeft: '4px' }}>
                delete
            </button>
        </div>
    ));
};

export default Person;
