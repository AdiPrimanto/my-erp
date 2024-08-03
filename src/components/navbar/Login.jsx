import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  let [isPassword, setIsPassword] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const togglePasswordVisibility = () => {
    setIsPassword(!isPassword);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-cyan-400 hover:bg-cyan-400/30 border border-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        LOGIN
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold text-center leading-6 text-cyan-900 mb-6"
                  >
                    Login
                  </Dialog.Title>
                  <div className="mb-4">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="mt-1 rounded-md p-2 border border-gray-400 w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="font-semibold">Password</label>
                    <div className="relative">
                      <input
                        type={isPassword ? "password" : "text"}
                        placeholder="Password"
                        className="mt-1 rounded-md p-2 border border-gray-400 w-full focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      />
                      <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {isPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Kembali
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-cyan-400 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Masuk
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
