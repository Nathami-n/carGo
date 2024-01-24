import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { manufacturers } from "../utils/Constants";

const SearchManufacturer = ({ manufacturer, setManufacturer }) => {
  const [query, setQuery] = useState("");
  const filtered =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) => {
          return item.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[2px]">
            <img
              src="/car-logo.svg"
              alt="icon"
              className="w-[20px] h-[20px] ml-4"
            />
          </Combobox.Button>
          <Combobox.Input
            className="w-[80%] md:w-[45%] outline-none  bg-gray-100 padding-x rounded-full"
            placeholder="volkswagen"
            displayValue={(manufacturer) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 "
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>
              {filtered.map((item, index) => {
                return (
                  <Combobox.Option value={item} key={index} className={({active})=> `relative w-[40%] ml-6 cursor-pointer ${active ? 'bg-primary-blue text-white': 'text-gray-900'}`}>
                    {item}
                  </Combobox.Option>
                );
              })}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
