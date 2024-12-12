import { NavLink } from "react-router-dom";

const Footers = () => {
  return (
    <>
      <footer className="bg-blue-500 shadow dark:bg-gray-900">
        <div className="w-screen max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <NavLink
              to="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <p className="border-2 border-white rounded-2xl overflow-hidden">
                <img
                  src="https://img.freepik.com/free-vector/super-kiddo-logo-text-design_1308-73110.jpg"
                  className="h-8"
                  alt="Flowbite Logo"
                />
              </p>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                CartoonPage
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
    </>
  );
};

export default Footers;
