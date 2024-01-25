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


export const getCarImageUrl = async (car, angle) => {
    const url = new URL('https://cdn.imagin.studio/getimage');
    const {year, make, model} = car;
    url.searchParams.append('customer', import.meta.env.VITE_IMAGIN_API_KEY);
    url.searchParams.append('make', make);
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('angle', `${angle}`);

    return `${url}`
}