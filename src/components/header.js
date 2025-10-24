import React, { useState } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import nextitLogo from '../assets/images/nexitlogo.png';
import avater from '../assets/images/avater.png'

const Header = ({ 
  logo = nextitLogo,
  candidateName = 'Lawal Paul Tomisin',
  candidateRole = 'Candidate',
  profileImage = avater,
  profileName = 'Paul Tomisin',
  notificationCount = 0,
  //onSearch,
  onProfileClick,
  onNotificationClick
}) => {
  //const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const handleSearch = (e) => {
//     const value = e.target.value;
//     setSearchQuery(value);
//     if (onSearch) {
//       onSearch(value);
//     }
//   };

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4 fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-full">
        {/* Left Section - Logo and Candidate Info */}
        <div className="flex items-center justify-between w-[32%] min-w-fit gap-8">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="NextIT Logo" 
              className="w-[170px] h-auto object-contain"
            />
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{candidateName}</h1>
            <p className="text-sm text-gray-500 mt-1">{candidateRole}</p>
          </div>
        </div>

        {/* Right Section - Search, Notifications, Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="bg-[#F7F7F7] p-2 rounded-lg flex items-center text-[#000]">
            <Search className="w-5 h-5 pointer-events-none text-[#000]" />
            {/* <input 
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            /> */}
          </div>

          {/* Notification Button */}
          <button 
            onClick={onNotificationClick}
            className="relative p-2 bg-[#F7F7F7] rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-[#000]" />
            {notificationCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {notificationCount > 9 ? '9+' : notificationCount}
              </span>
            )}
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                if (onProfileClick) onProfileClick();
              }}
              className="flex items-center gap-2 cursor-pointer bg-[#F7F7F7] px-3 py-1 rounded-xl transition-colors"
            >
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
              />
              <span className="font-medium text-gray-700">{profileName}</span>
              <ChevronDown 
                className={`w-4 h-4 text-gray-600 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} 
              />
            </button>

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-fadeIn">
                <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  View Profile
                </a>
                <a href="#settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  Settings
                </a>
                <hr className="my-2 border-gray-200" />
                <a href="#logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;