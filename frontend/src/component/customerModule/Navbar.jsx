import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav className="nav w-full bg-white shadow-md flex items-center justify-between">
            <div className="text-xl font-semibold text-white">
                CRM System - Sales Opportunities
            </div>
            <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">Welcome Admin</span>
                <span className='mr-2'><FontAwesomeIcon className='text-2xl' icon={faCircleUser} /></span>
            </div>
        </nav>
    );
}

export default Navbar;