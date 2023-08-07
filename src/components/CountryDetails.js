import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import countriesJSON from '../countries.json';

function CountryDetails(props){
    const [country, setCountry] =useState(null);

    const { id } = useParams();
    console.log('test',id)
    
    useEffect (() => {
        const oneCountry= countriesJSON.find((one) => one.alpha3Code.toLowerCase() === id)

        console.log(oneCountry)

        if(oneCountry) {
            console.log(oneCountry)
            setCountry(oneCountry)
        }
    }, [id])

    
    return(
        <div>
            {country && <div>
                <h2>{country.name.common}</h2>
                <h2>Area: {country.area} squared km</h2>
                <h2>Border: </h2>
                <ul>
                    {country.borders.map((border) => {
                        return (
                            <li>{border}</li>
                        )
                    })}
                </ul>
                </div>}
        </div>
    )
}

export default CountryDetails;