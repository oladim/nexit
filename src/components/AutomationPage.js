import { useState } from 'react';

function AutomationTraining() {
  const [selectedModule, setSelectedModule] = useState(null);

  const trainingModules = [
    {
      id: 1,
      title: "AI Automation Foundation (Beginner Level",
      duration: "Build strong fundamentals in AI, automation tools, prompt engineering, and workflow automation.",
      icon: "🤖",
      topics: ["Introduction to AI & Automation", "Understanding Large Language Models (LLMs)", "Prompt Engineering Fundamentals", "No-Code/Low-Code Automation Tools", "Data Fundamentals"],
      isAvailable: true,
    },
    {
      id: 2,
      title: "AI Automation Intermediate",
      duration: "Develop practical automation skills, build smarter workflows, integrate APIs, and handle logic-based automations.",
      icon: "🔧",
      topics: ["Intermediate Prompt Engineering", "Building Multi-Step Automations", "AI Agents & Task Automation", "Working with APIs", "Automation Orchestration", "Error Handling & Logging"],
      isAvailable: false,
    },
    {
      id: 3,
      title: "AI Automation Advanced",
      duration: "Build enterprise-grade automations with long-context models, vector databases, RAG, multi-agent systems, and robust workflow architectures.",
      icon: "🧠",
      topics: ["Advanced Prompt Engineering", "Building RAG Systems", "AI Multi-Agent Systems", "Building Scalable Automations", "Integrating LLMs with Backend Systems", "Monitoring & Optimization"],
      isAvailable: false,
    },
    {
      id: 4,
      title: "AI Engineering (Expert Level)",
      duration: "Transition learners from automation builders to AI engineers capable of building AI-native systems, custom pipelines, and production AI services.",
      icon: "🔩",
      topics: ["AI Engineering Fundamentals", "Building Custom AI Services", "LLM Tool Calling & Function Calling", "Fine-Tuning Models", "Enterprise-Grade Deployment", "AI Performance Optimization"],
      isAvailable: false,
    }
  ];

  const scheduleDetails = [
    { day: "Day 1", time: "9:00 AM - 5:00 PM", type: "AI Automation Fundamentals" },
    { day: "Day 2", time: "9:00 AM - 5:00 PM", type: "Workflows & Process Design" },
    { day: "Day 3", time: "9:00 AM - 5:00 PM", type: "AI Agents Development" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-5 shadow-md bg-white">
        <div className="text-xl font-bold text-blue-600 cursor-pointer">
          NexIT
        </div>
        <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-gray-700 text-sm lg:text-base">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">About us</li>
          <li className="cursor-pointer hover:text-blue-600">How it Works</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
          <li className="cursor-pointer hover:text-blue-600">FAQs</li>
        </ul>
        <button className="bg-blue-600 text-white rounded-lg px-4 sm:px-6 py-2 hover:bg-blue-700 text-sm sm:text-base">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
            AI Automation Training Program
          </h1>
          <p className="font-poppins text-base sm:text-lg text-gray-100 max-w-3xl mb-6 sm:mb-8">
            Master AI automation, workflows, and intelligent agents in just 3 intensive days. 
            Learn to build, deploy, and optimize AI-powered automation solutions from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 font-medium px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-100 text-sm sm:text-base">
              Enroll Now
            </button>
            <button className="border-2 border-white text-white font-medium px-6 sm:px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all text-sm sm:text-base">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⏱️</span>
            </div>
            <h3 className="font-poppins font-semibold text-lg sm:text-xl mb-2">Duration</h3>
            <p className="text-gray-600 text-sm sm:text-base">3 Days Intensive Training</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="font-poppins font-semibold text-lg sm:text-xl mb-2">Location</h3>
            <p className="text-gray-600 text-sm sm:text-base">Hybrid: Online & Ibadan Hub</p>
          </div>
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎓</span>
            </div>
            <h3 className="font-poppins font-semibold text-lg sm:text-xl mb-2">Certification</h3>
            <p className="text-gray-600 text-sm sm:text-base">Industry-Recognized Certificate</p>
          </div>
        </div>

        {/* Training Modules */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl mb-6 sm:mb-8 text-center">Training Modules</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {trainingModules.map((module) => (
              <div
                key={module.id}
                onClick={() => setSelectedModule(module.id === selectedModule ? null : module.id)}
                className={`${!module.isAvailable ? "cursor-not-allowed bg-gray-200" : "bg-white"} ${selectedModule !== module.id ? "h-[160px]" : null} border-2 border-gray-200 rounded-2xl p-4 sm:p-6 hover:border-blue-600 cursor-pointer transition-all`}
              >
                <div className={` flex items-start gap-3 sm:gap-4`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl sm:text-2xl">{module.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-poppins font-semibold text-lg sm:text-xl mb-2">{module.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base">Goal: {module.duration}</p>
                    {selectedModule === module.id && (
                      <div className="border mt-4 pt-4 border-t border-gray-200">
                        <p className="font-medium mb-2 text-sm sm:text-base">Topics Covered:</p>
                        <ul className="space-y-1">
                          {module.topics.map((topic, idx) => (
                            <li key={idx} className="text-gray-600 flex items-center gap-2 text-sm sm:text-base">
                              <span className="text-green-500">✓</span> {topic}
                            </li>
                          ))}
                        </ul>
                        <div className='pt-3'>
                        <button onClick={() => console.log("clikced")} disabled={!module.isAvailable} className={`${module.isAvailable ? " bg-blue-600 hover:bg-blue-700" : "bg-slate-500 hover:bg-slate-600"}  text-white rounded-lg px-4 sm:px-6 py-2  text-sm sm:text-base`}>
                          Enroll
                        </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-16">
          <h2 className="font-poppins font-semibold text-4xl mb-8 text-center">Daily Schedule</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            {scheduleDetails.map((schedule, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center justify-between py-4 border-b border-gray-200 last:border-b-0 gap-4"
              >
                <div className="flex-1">
                  <h4 className="font-poppins font-semibold text-lg">{schedule.day}</h4>
                  <p className="text-gray-600">{schedule.type}</p>
                </div>
                <div className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                  {schedule.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Details */}
        <div className="mb-16">
          <h2 className="font-poppins font-semibold text-4xl mb-8 text-center">Training Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="font-poppins font-semibold text-2xl mb-3">Online Sessions</h3>
              <p className="mb-4">Access live interactive classes from anywhere with our state-of-the-art virtual learning platform.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>✓</span> Live instructor-led sessions
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Recorded lectures for review
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Interactive breakout rooms
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="font-poppins font-semibold text-2xl mb-3">Abuja Training Hub</h3>
              <p className="mb-4">Join us at our modern facility for hands-on practical sessions and networking opportunities.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>✓</span> Plot 123, Gwarinpa, Abuja
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Fully equipped computer labs
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span> Collaborative workspaces
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="font-poppins font-semibold text-4xl mb-8 text-center">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">1</span>
                Core Skills
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>AI automation frameworks and tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>Workflow design and orchestration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>Process mapping and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">▪</span>
                  <span>Integration strategies and APIs</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-poppins font-semibold text-xl mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">2</span>
                AI Agents & Deployment
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▪</span>
                  <span>Building intelligent AI agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▪</span>
                  <span>Agent architecture and design patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▪</span>
                  <span>Real-world deployment strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▪</span>
                  <span>Monitoring and optimization techniques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="font-poppins font-semibold text-4xl mb-4">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join professionals mastering AI automation, workflows, and intelligent agents in this intensive 3-day program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-10 py-4 rounded-lg hover:bg-gray-100 text-lg transition-all">
              Enroll Now - Limited Seats
            </button>
            <button className="border-2 border-white text-white font-semibold px-10 py-4 rounded-lg hover:bg-white hover:text-blue-600 text-lg transition-all">
              Schedule a Call
            </button>
          </div>
          <p className="mt-6 text-sm">Next cohort starts: December 15-17, 2025</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 NexIT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AutomationTraining;