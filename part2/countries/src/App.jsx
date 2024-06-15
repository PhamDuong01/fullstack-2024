import { useState, useEffect } from 'react';
import countriesServices from './services/countries.js';
import Countries from './Countries.jsx';

function App() {
    const [countriesList, setCountriesList] = useState([]);
    const [searchCountry, setSearchCountry] = useState('');
    const [matchCountries, setMatchCountries] = useState([]);

    useEffect(() => {
        const getAllCountries = async () => {
            const res = await countriesServices.getAll();
            if (res) {
                setCountriesList(res);
            }
        };
        getAllCountries();
    }, []);

    useEffect(() => {
        if (searchCountry === '') {
            setMatchCountries([]);
            return;
        }
        const checkCountry = async (name) => {
            const result = await countriesList.filter((country) => {
                const countryName = country.name.common.toLowerCase();
                return countryName.includes(name.toLowerCase());
            });
            setMatchCountries(result);
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
            {matchCountries.length > 0 && <Countries countries={matchCountries} />}
        </>
    );
}
export default App;
