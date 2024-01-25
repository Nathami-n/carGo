import { ArrowRightAltOutlined } from "@mui/icons-material";
import { CustomButton, CarInfo } from "./";
import { useState } from "react";
const CarCard = ({car}) => {
  const {transmission,drive,fuel_type,make,model} = car
  const [openModal, setOpenModal] = useState(false);
  const modalOpen = () => {
    setOpenModal(!openModal);
  };
  console.log(openModal);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {" "}
          {make} {model}
        </h2>
      </div>
      <div className="relative w-full h-40 my-3 ">
        <img
          src="/car.png"
          alt="car image"
          className=" object-contain w-full h-full"
        />
      </div>
      <div className="flex w-full mt-3 relative">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="steering-wheel.svg" alt="steering" className="w-[30px]" />
            <p className="text-[14px] font-bold">
              {" "}
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="gas.svg" alt="steering" className="w-[30px]" />
            <p className="text-[14px] font-bold">{fuel_type}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="/tire.svg" alt="steering" className="w-[30px]" />
            <p className="text-[14px] font-bold">{drive} </p>
          </div>
        </div>
        <div className="absolute w-full">
          <CustomButton
            title="view details"
            containerStyles="bg-blue-500 w-full rounded-full -z-10 text-white font-bold group-hover:z-10"
            btnIcon={
              <ArrowRightAltOutlined
                sx={{
                  width: "30px",
                  height: "30px",
                  color: "white",
                  objectFit: "contain",
                }}
              />
            }
            handleClick={modalOpen}
          />
        </div>
      </div>
      <CarInfo openModal={openModal} car={car} closeModal={()=>setOpenModal(false)}/>
    </div>
  );
};

export default CarCard;
