import { useState } from 'react';
import Weather from './Weather';

const Info = ({ countryInfo }) => {
    let languages = [];
    for (const key in countryInfo.languages) {
        const value = countryInfo.languages[key];
        languages.push(`${value}`);
    }
    return (
        <div>
            <p>
                capital
                {countryInfo.capital.map((capital) => {
                    return (
                        <span key={capital} style={{ marginLeft: '6px' }}>
                            {capital}
                        </span>
                    );
                })}
            </p>
            <p>area {countryInfo.area}</p>
            <h4>Languages:</h4>
            <ul>
                {languages.map((language) => {
                    return <li key={language}>{language}</li>;
                })}
            </ul>
            <div className='flag'>
                <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
            </div>
            <h3>Weather in ${countryInfo.name.common}</h3>
            <Weather latlng={countryInfo.latlng} />
        </div>
    );
};

const CountriesInfo = ({ countries }) => {
    const [isShow, setIsShow] = useState(new Array(countries.length).fill(false));
    const handleShow = (event) => {
        const id = event.target.dataset.id;
        const showInfo = new Array(countries.length).fill(false);
        showInfo[id] = true;
        setIsShow(showInfo);
    };

    if (countries.length > 1) {
        const a = countries.map((country, index) => {
            return (
                <div key={country.name.common}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '20px', margin: '4px 0' }}>
                        <h4>{country.name.common}</h4>
                        <button style={{ height: '20px', marginLeft: '6px' }} data-id={index} onClick={handleShow}>
                            show
                        </button>
                    </div>
                    {isShow[index] && <Info key={country.offical} countryInfo={country} />}
                </div>
            );
        });
        return a;
    }
    return (
        <>
            <h4>{countries[0].name.common}</h4>
            <Info countryInfo={countries[0]} />
        </>
    );
};

const Countries = ({ countries }) => {
    if (countries.length > 10) return <p>Too many matches, specify another filter</p>;
    return <>{<CountriesInfo countries={countries} />}</>;
};

export default Countries;
