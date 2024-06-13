const Person = ({ persons, onDeleteClick }) => {
    return persons.map((person) => (
        <div key={person.id}>
            <p>
                {person.name}-{person.number}
            </p>
            <button data-id={person.id} onClick={onDeleteClick}>
                delete
            </button>
        </div>
    ));
};

export default Person;
