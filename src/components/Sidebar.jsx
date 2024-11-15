// src/components/Sidebar.js
import React, { useState, useRef, useEffect } from 'react';
import { NavLink,Link,Outlet } from 'react-router-dom';
import { RectangleGroupIcon, UserIcon, ChartBarIcon, BanknotesIcon,KeyIcon ,IdentificationIcon , CodeBracketSquareIcon, InformationCircleIcon, DocumentTextIcon, BookOpenIcon } from '@heroicons/react/20/solid';
import Navbar from './Navbar';



const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else {
        document.removeEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    
  
  

    const links = [
      { path: '/', name: 'Dashboard', icon: RectangleGroupIcon },
      { path: '/pdf-list', name: 'PDF List', icon:  InformationCircleIcon},
      // { path: '/shopify-analytics', name: 'Shopify Analytics', icon: ChartBarIcon },
      { path: '/pdf-editor', name: 'PDF Editor', icon: BanknotesIcon },
    //   { path: '/api', name: 'API', icon: CodeBracketSquareIcon },
      { path: '/users', name: 'Users', icon: UserIcon },
      { path: '/companies', name: 'Companies', icon: DocumentTextIcon },

    ];
  
// Get the name of the current route
const currentRouteName = links.find(link => link.path === location.pathname)?.name || 'Dashboard';

  return (
    <div className="flex">
      {/* Sidebar */}
      <div ref={sidebarRef}  className={`text-sm fixed md:sticky inset-0 bg-black border-r border-gray-700 text-white w-64 md:h-screen transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-30 md:relative md:translate-x-0`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Zenrevo Admin</h1>
          <ul className="mt-10 space-y-2">
          {links.map(link => (
              <li key={link.path}>
                {link.path === '/terms' ? (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "flex px-4 py-3 bg-[#2b2b2a] rounded " : "flex fixed bottom-10 px-4 py-3 hover:text-white text-gray-400"
                    }
                    onClick={toggleSidebar}
                  >
                    {link.icon && <link.icon className="w-6 h-6 mr-2" />}
                    {link.name}
                  </NavLink>
                ) : link.path === '/faq' ? (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "flex px-4 py-3 bg-[#2b2b2a] rounded " : "flex fixed bottom-1 px-4 py-3 hover:text-white text-gray-400"
                    }
                    onClick={toggleSidebar}
                  >
                    {link.icon && <link.icon className="w-6 h-6 mr-2" />}
                    {link.name}
                  </NavLink>
                ) : (
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "flex px-4 py-3 bg-[#2b2b2a] rounded " : "flex px-4 py-3 hover:text-white text-gray-400"
                    }
                    onClick={toggleSidebar}
                  >
                    {link.icon && <link.icon className="w-6 h-6 mr-2" />}
                    {link.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>


      {/* Main content */}
      <div className="flex-1 min-h-screen ">
        
        <div>
          {/* Sticky Top Nav Bar */}
          <Navbar/>
          {/* Your main content goes here */}
          <div className=' mx-0 md:mx-2'>
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;