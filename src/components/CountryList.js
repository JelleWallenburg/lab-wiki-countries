import { Link } from "react-router-dom"; 

function CountryList({countryJSON}){
    console.log('countrylist', countryJSON)
    return(
        <div>
            {countryJSON.map((country) => {
                return(
                    <div>
                        <img src= {`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} height='40px' alt='country-flag'/>
                        <Link to={`/projects/${country.alpha3Code.toLowerCase()}`}> {country.name.common}</Link>
                    </div>
                );
            })}
        </div>
    )
}

export default CountryList;