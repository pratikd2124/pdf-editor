import React, { useState, useRef, useEffect } from 'react';
import { NavLink,Link,Outlet } from 'react-router-dom';
import { RectangleGroupIcon, UserIcon, ChartBarIcon, BanknotesIcon,KeyIcon ,IdentificationIcon , CodeBracketSquareIcon, InformationCircleIcon, DocumentTextIcon, BookOpenIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    
    const [isdropdownOpen, setIsdropdownOpen] = useState(false);

    const handleToggleDropdown = () => {
      setIsdropdownOpen(!isdropdownOpen);
    };
    const dropdownRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsdropdownOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  return (
    <div className="sticky top-0 w-full overflow-hidden z-20 py-8 bg-white border-b border-gray-300 px-10 shadow-lg">
            <div className='flex justify-between'>
              <h2 className="text-xl font-bold">Zenrevo</h2>
              
              <div className='flex gap-8'>
                   
                <button className='hidden md:block'>
                    <Link to="signup">
                      <u>Login</u>
                    </Link>
                </button>
                  
                  <button className=" md:hidden p-2 md:bg-gray-800 text-white rounded-full focus:outline-none focus:bg-gray-700" onClick={toggleSidebar}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                  </button>
                  <div className="flex  items-center">
                    <button onClick={handleToggleDropdown} className="relative p-2 bg-gray-800 text-white rounded-full focus:outline-none focus:bg-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      {isdropdownOpen && (
                      <div ref={dropdownRef} className="fixed  z-50  right-4 mt-2 w-48 bg-[#0f0f0f] border border-gray-700 shadow-lg rounded-xl">
                        <button className="block w-full py-2 px-4 text-sm text-left hover:bg-gray-900" onClick={() => console.log('Email')}>
                          <p>Pratik Dhumal</p>
                          <small>pratikd2124@gmail.com</small>
                        </button>
                        <a href="/terms" className="block w-full py-2 px-4 text-sm text-left hover:bg-gray-900">Terms</a>
                        <button className="block w-full py-2 px-4 text-sm text-left hover:bg-gray-900" onClick={() => console.log('Logout')}>Logout</button>
                      </div>
                    )}
                    </button>


                  </div>

              </div>
            </div>
          </div>
  )
}

export default Navbar