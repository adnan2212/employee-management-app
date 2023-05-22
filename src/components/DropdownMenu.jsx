import { useState } from "react";
import { MdMenu } from "@ricons/ionicons4";
import { Icon } from "@ricons/utils";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown toggle button */}
      <button
        onClick={toggleDropdown}
        className="z-10block relative rounded-md border border-transparent bg-white p-0 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:bg-[#2051E5] dark:text-white dark:focus:ring-blue-400 dark:focus:ring-opacity-40"
      >
        <Icon color="white" size={20}>
          <MdMenu />
        </Icon>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-xl dark:bg-gray-800"
        >
          <a
            href="#"
            className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Your Projects
          </a>
          <a
            href="#"
            className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Help
          </a>
          <a
            href="#"
            className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Settings
          </a>
          <a
            href="#"
            className="block transform px-4 py-3 text-sm capitalize text-gray-600 transition-colors duration-300 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
