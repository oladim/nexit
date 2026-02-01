import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, X } from 'lucide-react';
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-full gap-4">
        {/* Left Section - Logo and Candidate Info */}
        <div className="flex items-center gap-4 w-full sm:w-auto min-w-0">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="NextIT Logo" 
              className="w-36 md:w-[170px] h-auto object-contain"
            />
          </div>

          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-gray-900">{candidateName}</h1>
            <p className="text-sm text-gray-500 mt-1">{candidateRole}</p>
          </div>
        </div>

        {/* Desktop Right Section - Search, Notifications, Profile */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search Bar */}
          <div className="bg-[#F7F7F7] p-2 rounded-lg flex items-center text-[#000]">
            <Search className="w-5 h-5 pointer-events-none text-[#000]" />
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

        {/* Mobile hamburger */}
        <div className="flex items-center md:hidden">
          <button
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md bg-[#F7F7F7]"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile slide-out menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 pt-16">
            <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMobileMenuOpen(false)} aria-hidden="true" />
            <div className="absolute top-0 right-0 w-full max-w-xs h-full bg-white shadow-lg p-4 overflow-auto">
              <div className="flex items-center justify-between mb-4">
                <img src={logo} alt="logo" className="w-32 h-auto" />
                <button aria-label="Close menu" onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-md">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                <a href="#home" className="block px-3 py-2 rounded hover:bg-gray-100">Home</a>
                <a href="#about" className="block px-3 py-2 rounded hover:bg-gray-100">About us</a>
                <a href="#how" className="block px-3 py-2 rounded hover:bg-gray-100">How it Works</a>
                <a href="#contact" className="block px-3 py-2 rounded hover:bg-gray-100">Contact</a>
                <a href="#faqs" className="block px-3 py-2 rounded hover:bg-gray-100">FAQs</a>
              </nav>

              <div className="mt-6 border-t pt-4">
                <a href="#profile" className="block px-3 py-2 rounded hover:bg-gray-100">View Profile</a>
                <a href="#settings" className="block px-3 py-2 rounded hover:bg-gray-100">Settings</a>
                <button className="block w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-50">Logout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;