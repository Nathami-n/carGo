import {Filter,SearchBar} from "./";
import {useEffect} from 'react'
import { FetchData } from "../utils/FetchData";

const Cars = () => {
    const [carData, setCarData] = useState([])
    useEffect(()=>{
        const controller = new AbortController()
        const signal = controller.signal;

        FetchData('corolla', {signal})
        return () =>{
            controller.abort();
        }

    },[])
  return (
    <section className="mt-12 padding-x padding-y" id="explore">
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


    </div>
    </section>
  );
};

export default Cars;
