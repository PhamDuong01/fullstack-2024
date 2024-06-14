const Information = ({ countries }) => {
    const numCountries = countries.length;
    if (numCountries > 10) {
        return <p>Too many matches, specify another filter</p>;
    }
    if (numCountries > 1) {
        return (
            <div>
                {countries.map((country) => {
                    return (
                        <div key={country.name.official} style={{ display: 'flex', alignItems: 'center' }}>
                            <p>{country.name.common}</p>
                        </div>
                    );
                })}
            </div>
        );
    }
    if (numCountries < 1) {
        return null;
    } else {
        let languages = [];
        for (const key in countries[0].languages) {
            const value = countries[0].languages[key];
            languages.push(`${value}`);
        }
        return (
            <div>
                <h1>{countries[0].name.common}</h1>
                <p>
                    capital
                    {countries[0].capital.map((capital) => {
                        return (
                            <span key={capital} style={{ marginLeft: '6px' }}>
                                {capital}
                            </span>
                        );
                    })}
                </p>
                <p>area {countries[0].area}</p>
                <h4>Languages:</h4>
                <ul>
                    {languages.map((language) => {
                        return <li key={language}>{language}</li>;
                    })}
                </ul>
                <div className='flag'>
                    <img src={countries[0].flags.png} alt={countries[0].flags.alt} />
                </div>
            </div>
        );
    }
};

export default Information;
