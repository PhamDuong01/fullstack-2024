import { useState, useEffect } from 'react';
import countriesServices from './countries.js';
import Information from './Information.jsx';

function App() {
    const [countries, setCountries] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    const [matchCountry, setMatchCountry] = useState([]);

    useEffect(() => {
        const getAllCountries = async () => {
            const res = await countriesServices.getAll();
            if (res) {
                setCountries(res);
            }
        };
        getAllCountries();
    }, []);

    useEffect(() => {
        if (searchCountry === '') {
            setMatchCountry([]);
            return;
        }
        const checkCountry = async (name) => {
            const result = await countries.filter((country) => {
                const countryName = country.name.common.toLowerCase();
                return countryName.includes(name.toLowerCase());
            });
            setMatchCountry(result);
        };

        checkCountry(searchCountry);
    }, [searchCountry]);

    const handleSearch = (event) => {
        setSearchCountry(event.target.value);
    };

    return (
        <>
            <div>
                find counries <input type='text' onChange={handleSearch} value={searchCountry} />
            </div>
            <Information countries={matchCountry} />
        </>
    );
}
export default App;
