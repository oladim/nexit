// src/components/Candidate.js
 import nextitLogo from '../assets/images/nexitlogo.png';
// function Candidate() {
//   return (
//     <div className="border h-20 flex items-center">
//       <div className="border">
//         <img src={nextitLogo} alt="nextit Logo" className='w-[170px]'/>
//       </div>
//     </div>
//   );
// }

// export default Candidate;

import React, { useState } from 'react';
import { Search, Bell, ChevronDown, ChevronLeft, ChevronRight, Calendar, Upload, BookOpen, MessageSquare, User, Settings, LogOut, Menu } from 'lucide-react';
import Header from './header';

export default function Candidate() {
  const [selectedDate, setSelectedDate] = useState(8);
  const [currentMonth, setCurrentMonth] = useState('June 2025');

  const stats = [
    { label: 'Total Assessment Taken', value: '245', bg: 'bg-orange-50' },
    { label: 'Average Score', value: '78%', bg: 'bg-blue-50' },
    { label: 'Top Skill', value: '62%', bg: 'bg-pink-50' }
  ];

  const daysInMonth = [
    [null, null, null, null, null, null, null],
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, null, null, null]
  ];

  const scoreDistribution = [
    { label: 'Skills', value: 45, color: 'bg-blue-400' },
    { label: 'CV', value: 65, color: 'bg-green-400' },
    { label: 'Composure', value: 85, color: 'bg-black' },
    { label: 'Result', value: 75, color: 'bg-blue-600' },
    { label: 'Attention', value: 55, color: 'bg-blue-800' },
    { label: 'Other', value: 70, color: 'bg-green-500' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className='flex'>
          <div className="w-64 bg-white border-r pt-[7%] border-gray-200 flex flex-col">
            <nav className="flex-1 px-4 fixed h-full">
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-blue-600 bg-blue-50 rounded-lg mb-2">
                <Menu className="w-5 h-5" />
                <span className="font-medium">Dashboard</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mb-2">
                <Upload className="w-5 h-5" />
                <span>CV Upload</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mb-2">
                <BookOpen className="w-5 h-5" />
                <span>Interview</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mb-2">
                <Calendar className="w-5 h-5" />
                <span>Training</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mb-2">
                <MessageSquare className="w-5 h-5" />
                <span>Profile</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg mb-2">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </a>
            </nav>
          </div>
          <div className="pt-[7%] w-full px-8 pb-8 py-4">
            <div className='pb-5'>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold">Welcome back <span className='font-bold'>Mathew!</span></h1>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
            
                  <div className="ml-7 flex items-center gap-2 cursor-pointer text-[#007BFF]">
                    <Calendar className='size-4'/>
                    <span className="font-medium">Tue, 24 Nov 2021</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            {/* Status Banner */}
            <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between border border-gray-200">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Upload className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Registration Completed and CV uploaded Successfully</p>
                  <p className="text-sm text-gray-500">Waiting for approval from the Admin</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
                Upload New CV
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Stats Cards */}
              {stats.map((stat, idx) => (
                <div key={idx} className={`${stat.bg} rounded-lg p-6`}>
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Skill Match Ratio */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold mb-4">Skill Match Ratio</h3>
                <div className="relative w-40 h-40 mx-auto">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#000" strokeWidth="15" strokeDasharray="110 220" transform="rotate(-90 50 50)" />
                    <circle cx="50" cy="50" r="35" fill="none" stroke="#3B82F6" strokeWidth="15" strokeDasharray="150 220" transform="rotate(20 50 50)" />
                  </svg>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span>React</span>
                    </div>
                    <span className="font-medium">62.1%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <span>Intermediate</span>
                    </div>
                    <span className="font-medium">22.8%</span>
                  </div>
                </div>
              </div>

              {/* Score Distribution */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold mb-4">Candidate Score Distribution</h3>
                <div className="flex items-end justify-around h-48 gap-2">
                  {scoreDistribution.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1">
                      <div className={`w-full ${item.color} rounded-t`} style={{ height: `${item.value}%` }}></div>
                      <span className="text-xs text-gray-600 mt-2">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{currentMonth}</h3>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-600 py-2">{day}</div>
                  ))}
                  {daysInMonth.flat().map((day, idx) => (
                    <div key={idx} className="text-center py-2">
                      {day && (
                        <button 
                          className={`w-8 h-8 rounded-full text-sm ${day === selectedDate ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
                          onClick={() => setSelectedDate(day)}
                        >
                          {day}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Available Jobs */}
            <div className="bg-white rounded-lg p-6 mt-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Available Jobs Opportunities</h3>
                  <p className="text-sm text-gray-500">Consuming fruit juices keeps up the hydration level.</p>
                </div>
                <button className="text-blue-600 text-sm font-medium flex items-center gap-1">
                  See All <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {[1, 2].map((_, idx) => (
                  <div key={idx} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                      <div>
                        <h4 className="font-medium">UX Designer</h4>
                        <p className="text-sm text-gray-500">FCT Abuja, Nigeria • 1 Week Ago • 100 Applicants</p>
                      </div>
                    </div>
                    <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-50">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}