const key = '59339b647c86089dce00b2e923de529e';

 const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=59339b647c86089dce00b2e923de529e'

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}