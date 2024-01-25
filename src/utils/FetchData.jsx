import axios from "axios"


const BASE_URL = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
const options = {
    url: BASE_URL,
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }

}
export const FetchData = async (model, signal) => {
    const response = await axios.get(`${BASE_URL}?model=${model}`, options, {signal});
    const data = response.data;
    return data;
}