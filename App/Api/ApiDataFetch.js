export const getCityPopulation = (routeText: string) => {
    return fetch('http://api.geonames.org/searchJSON?username=weknowit&featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=1&name_equals=' + routeText)
        .then((response) => response.json()
            .then((data) => {
                    if (data.totalResultsCount === 1) {
                            return data.geonames[0].population;
                    } else {
                        return "City does not exist";
                    }
                },
                (error) => {
                    return error;
                }
            )
        );
}
export const checkIfCityExists = (routeText: string) => {
    return fetch('http://api.geonames.org/searchJSON?username=weknowit&featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=1&name_equals=' + routeText)
        .then((response) => response.json()
            .then((data) => {
                    return data.totalResultsCount === 1;
                }
            )
        );
}
export const getLargestCities = async (routeText: string) => {

    return getCountryInitials(routeText).then(
        async (response) => {
            return getThreeCities(response);
        }, (error) => {
            return error;
        }
    )
}

export const checkIfCountryValid =  async (routeText: string) =>{
    return getCountryInitials(routeText).then(
        async (response) =>{
            return response !== "Country does not exist";
        }
    )
}
const getCountryInitials = async (routeText: string) => {

    return fetch('http://api.geonames.org/searchJSON?username=weknowit&featureClass=A&featureCode=PCLI&maxRows=1&name=' + routeText).then(
        (response) => response.json()
            .then((data) => {
                if (data.totalResultsCount > 0)
                    return data.geonames[0].countryCode;
                else
                    return "Country does not exist";
            },
            (error) => {
                return error;
            }
        )
    );
}

const getThreeCities = async (countryCode: string) => {

    return fetch('http://api.geonames.org/searchJSON?username=weknowit&featureCode=PPLA&featureCode=PPLS&featureCode=PPLC&maxRows=3&orderby=population&country=' + countryCode).then(
        (response) => response.json()
            .then((data) => {
                if (data.geonames.length > 0) {
                    let cities: string[] = [];
                    data.geonames.forEach((country: any) => {
                        cities.push(country.name)
                    });
                    return cities;
                } else {
                    return "Country does not exist";
                }
            },
            (error) => {
                return error;
            }
        )
    );
}