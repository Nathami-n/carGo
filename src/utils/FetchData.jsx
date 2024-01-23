import axios from "axios"


const BASE_URL = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
const options = {
    method:'GET',
    URL: BASE_URL,
    params:{model:'corolla'},
    headers: {
        'X-RapidAPI-key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host':'cars-by-api-ninjas.p.rapidapi.com'
    }

}
export const FetchData = async () => {
    const response = await axios.get(`BASE_URL/${URL}`, options);
    const data = response.data;
    return data;
}