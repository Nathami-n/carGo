import {Filter,SearchBar} from "./";

const Cars = () => {
  return (
    <section className="mt-12 padding-x padding-y" id="explore">
      <div className="car__heading">
        <h1>Explore Cars</h1>
      </div>
     <div className="flex flex-col md:flex-row">
     <SearchBar/>
    <div className="flex items-center gap-3">
    <Filter title='Gas'/>
     <Filter title='Year'/>
    </div>
     </div>
    </section>
  );
};

export default Cars;
