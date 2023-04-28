import { useState } from "react";
import { Link } from "@remix-run/react";
import logo from "~/assests/svg/dobu-logo.svg";
import NavBarLink from "./NavBarLink";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className=" md:justify between bg-gray-900 md:flex">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <Link to="/" className="block text-white">
            <img
              className="h-16 w-auto"
              src={logo}
              alt="Dobu Martial Arts Gym"
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />

              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`px-2 pt-2 pb-4 ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center`}
      >
        <NavBarLink url="/about">Home</NavBarLink>
        <NavBarLink url="/about">About Us</NavBarLink>
        <NavBarLink url="/about">Classes</NavBarLink>
        <NavBarLink url="/about">Membership</NavBarLink>
        <NavBarLink url="/about">Login</NavBarLink>
      </div>
    </header>
  );
};

export default NavBar;
