import React from 'react';

interface NavBarProps {
  handleClick: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ handleClick }) => {
  return (
    <nav className="flex justify-center">
      <a
        href="#"
       className="text-black hover:underline m-2"
          >
      Home
        </a>
        <a
        href="#"
       className="text-black hover:underline m-2"
          >
      Service
        </a>
        <a
        href="#"
       className="text-black hover:underline m-2"
          >
      About Me
        </a>
        <a
        href="#"
       className="text-black hover:underline m-2"
          >
      Contact
        </a>
        <a
        href="#"
       className="text-black hover:underline m-2"
          >
      Blog
        </a>
    </nav>
  );
};

export default NavBar;
