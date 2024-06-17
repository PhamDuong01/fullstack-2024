const Filter = ({ onHandleFiltInput, filtPerson }) => {
    return (
        <div>
            filter shown with: <input onChange={onHandleFiltInput} value={filtPerson} />
        </div>
    );
};

export default Filter;
