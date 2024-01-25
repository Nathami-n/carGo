import {Filter,SearchBar, CarCard} from "./";
import {useEffect, useState} from 'react'
import { FetchData } from "../utils/FetchData";


const Cars = () => {
    const [carData, setCarData] = useState([])
    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal;

        FetchData('corolla', {signal})
        .then(data=>setCarData(data))
        return () =>{
            controller.abort();
        }

    },[])
    console.log(carData)
  return (
    <section className="mt-12 padding-x padding-y w-full" id="explore">
      <div className="car__heading mb-5">
        <h1>Explore Cars</h1>
      </div>
     <div className="flex flex-col md:flex-row">
     <SearchBar/>
    <div className="flex items-center gap-3">
    <Filter title='Gas'/>
     <Filter title='Year'/>
    </div>
     </div>
    <div className = 'car__container'>

        {carData.map((car, index)=> {
            return <CarCard key={index} car = {car}/>
        })}
    </div>
    </section>
  );
};

export default Cars;
