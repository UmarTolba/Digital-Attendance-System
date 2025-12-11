import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import NewSideBar from '../components/NewSideBar';
const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Appearance'); 
  const [theme, setTheme] = useState('Dark'); 
  const [isSideNavEnabled, setIsSideNavEnabled] = useState(true);

  const NavItem = ({ name, icon, isActive, onClick }) => (
    <a
      href="#"
      onClick={onClick}
      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-150 ${
        isActive 
          ? 'bg-gray-600 text-white font-semibold' 
          : 'text-gray-200 hover:bg-gray-600 hover:text-white'
      }`}
    >
      {icon}
      <span>{name}</span>
    </a>
  );

  const ThemeOption = ({ value, isChecked, onClick }) => (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-24 h-24 rounded-lg border-2 transition-all duration-200 ${
        isChecked 
          ? 'border-blue-500 shadow-md text-blue-600' 
          : 'border-gray-300 text-gray-700 hover:border-blue-300'
      }`}
    >
      <span className="font-medium text-sm capitalize">{value}</span>
      {isChecked && (
        <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
      )}
    </button>
  );

  const ToggleSwitch = ({ isEnabled, setEnabled }) => (
    <button
      onClick={() => setEnabled(!isEnabled)}
      className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        isEnabled ? 'bg-blue-600' : 'bg-gray-200'
      }`}
      aria-checked={isEnabled}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
          isEnabled ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
  
  // --- Main Component Structure ---

  return (

        
        

        <div className="flex h-full bg-white shadow-2xl overflow-hidden">
            
            {/* Left Side Navigation (Dark Column) */}
            <NewSideBar></NewSideBar>
            {/* Right Side Content (White Column - Active Settings) */}
            <div className="w-3/4 p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Customize your interface</h2>
                
                {/* Theme Selection */}
                <div className="mb-8">
                    <p className="font-semibold text-gray-700 mb-3">Theme</p>
                    <div className="flex space-x-4">
                        <ThemeOption value="Light" isChecked={theme === 'Light'} onClick={() => setTheme('Light')} />
                        <ThemeOption value="Dark" isChecked={theme === 'Dark'} onClick={() => setTheme('Dark')} />
                        <ThemeOption value="System" isChecked={theme === 'System'} onClick={() => setTheme('System')} />
                    </div>
                </div>

                {/* Font Size Slider */}
                <div className="mb-8">
                    <p className="font-semibold text-gray-700 mb-2">Font Size</p>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">Small</span>
                        <input type="range" min="0" max="100" defaultValue="75" 
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg"
                            style={{ '--tw-range-thumb-color': 'rgb(37 99 235)' }} // Custom thumb color
                        />
                        <span className="text-sm text-gray-500">Large</span>
                    </div>
                </div>

                {/* Language Dropdown */}
                <div className="mb-8 max-w-sm">
                    <p className="font-semibold text-gray-700 mb-2">Language</p>
                    <div className="relative">
                        <select
                            defaultValue="English (US)"
                            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none"
                        >
                            <option>English (US)</option>
                            <option>Spanish (ES)</option>
                            <option>French (FR)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.06 13.56a9 9 0 01-14.12 0m14.12 0l-1.06-1.06m-12.06 0l-1.06 1.06"></path></svg>
                        </div>
                    </div>
                </div>

                {/* Compact Mode Toggle */}
                <div className="mb-8 flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-700">Compact Mode</p>
                    <ToggleSwitch isEnabled={false} setEnabled={() => {}} />
                </div>

                {/* Save Button */}
                <div className="flex justify-end pt-4 border-t border-gray-200">
                    <button className="px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-150 font-medium">
                        Save Changes
                    </button>
                </div>

            </div>
        </div>


  );
};

export default SettingsPage;