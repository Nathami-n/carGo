import { Fragment } from "react";
import { IconButton } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import { Dialog, Transition } from "@headlessui/react";
const CarInfo = ({ openModal, closeModal, car }) => {
  return (
    <>
      <Transition appear show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-80"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-80"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white shadow-xsl text-left transition-all flex flex-col gap-5">
                  <IconButton
                    onClick={closeModal}
                    sx={{
                      position: "absolute",
                      color: "white",
                      zIndex: "20",
                      right: "0",
                      top: "0",
                    }}
                  >
                    <CloseFullscreen role="img" />
                  </IconButton>
                  <div className="flex flex-col flex-1 gap-4">
                    <div className="relative w-full h-40 pattern bg-center rounded-lg">
                      <img
                        src="/car.png"
                        alt="car image"
                        className=" object-contain w-full h-full"
                      />
                    </div>
                    <div className="flex flex-1 w-full gap-4">
                      <div>
                        <img
                          src="/car.png"
                          alt="car image"
                          className=" object-contain w-full h-full"
                        />
                      </div>

                      <div>
                        <img
                          src="/car.png"
                          alt="car image"
                          className=" object-contain w-full h-full"
                        />
                      </div>

                      <div>
                        <img
                          src="/car.png"
                          alt="car image"
                          className=" object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h2 className="text-xl capitalize font-semibold">{car.make} {car.model}</h2>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarInfo;
