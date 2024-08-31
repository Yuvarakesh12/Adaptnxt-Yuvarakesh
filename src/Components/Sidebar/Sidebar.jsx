import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import Charts from '../Charts/charts';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const sections = [
        { name: 'Dashboard', icon: null },
        { name: 'Inventory', icon: null },
        { name: 'Order', icon: null },
        { name: 'Returns', icon: null },
        { name: 'Customers', icon: null },
        { name: 'Shipping', icon: null },
        { name: 'Channel', icon: null },
        { name: 'Integrations', icon: null },
        { name: 'Calculators', icon: <FaAngleDown /> },
        { name: 'Reports', icon: <FaAngleDown />},
        { name: 'Accounts', icon: <FaAngleDown /> }
    ];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/5 p-5 bg-white shadow-md flex flex-col mt-10">
                <ul className="list-none p-0 m-0">
                    {sections.map((section) => (
                        <li
                            key={section.name}
                            className={`mb-2 text-lg p-2 rounded cursor-pointer transition-colors duration-300 flex items-center ${
                                activeTab === section.name ? 'bg-purple-200 text-purple-600' : 'text-gray-500'
                            }`}
                            onClick={() => {
                                setActiveTab(section.name);
                            }}
                        >
                            <span className="flex-1">{section.name}</span>
                            {section.icon && (
                                <span className="ml-2">
                                    {section.icon}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main content area */}
            <div className="w-4/5 p-5 bg-gray-100 h-screen">
                {/* Navbar */}
                <nav className="p-2 bg-gray-200 rounded-lg mb-5 shadow-sm">
                    <h2 className="text-xl text-purple-600 m-0 bg-white w-40 p-1">{activeTab}</h2>
                </nav>

                {/* Content based on the active tab */}
                <div className="bg-gray-100 h-full p-2">
                    <Charts className="mt-10" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
