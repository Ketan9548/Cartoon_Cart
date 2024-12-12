import { NavLink } from "react-router-dom";

const Footers = () => {
  return (
    <>
      <div>
        <footer className="bg-gray-600 rounded-lg shadow dark:bg-gray-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <NavLink
                to="https://flowbite.com/"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Flowbite
                </span>
              </NavLink>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
                <li>
                  <NavLink to="#" className="hover:underline me-4 md:me-6">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="hover:underline">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-white sm:text-center dark:text-gray-400">
              © 2023{" "}
              <NavLink to="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </NavLink>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footers;
