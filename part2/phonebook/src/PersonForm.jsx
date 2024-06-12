const PersonForm = ({ onAddNew, onHandleNameInput, onHandleNumberInput, newName, newNumber }) => {
    return (
        <form onSubmit={onAddNew}>
            <div>
                name: <input onChange={onHandleNameInput} value={newName} />
            </div>
            <div>
                number: <input onChange={onHandleNumberInput} value={newNumber} />
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    );
};

export default PersonForm;
