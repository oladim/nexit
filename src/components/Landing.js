// import background from "../assets/images/background.png";
// import user from "../assets/images/user.png";
// import avater from "../assets/images/avater.png";
// import BrandBar from "./Brands";
// import AboutSection from "./AboutSection";
// import ProcessFlow from "./ProcessFlow";
// import { useNavigate } from 'react-router-dom';

// function Landing() {
//   const navigate = useNavigate();
//   return <>
//     <div className="relative h-screen w-full bg-white overflow-hidden">
//       {/* Background image anchored to bottom right */}
//       <img
//         src={background}
//         alt="Background"
//         className="absolute bottom-0 right-0 w-[700px] h-auto pointer-events-none select-none"
//       />

//       {/* Navbar */}
//       <nav className="relative flex items-center justify-between px-10 py-5 shadow-md bg-white z-10">
//         {/* Logo */}
//         <div className="text-xl font-bold text-blue-600">NexIT</div>

//         {/* Menu */}
//         <ul className="flex items-center gap-8 text-gray-700">
//           <li>Home</li>
//           <li>About us</li>
//           <li>How it Works</li>
//           <li>Contact</li>
//           <li>FAQs</li>
//         </ul>

//         {/* CTA */}
//         <button className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700">
//           Get Started
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <div className="flex flex-row z-10 w-[100%] h-[100vh] opacity-100 rotate-0 justify-center">
//         {/* Left Content */}
//         <div className="flex flex-col justify-evenly h-[85%]">
//           <h1 className="font-poppins font-semibold text-[56px] leading-[67.2px] align-middle tracking-normal w-[653px] h-[202px]  opacity-100 rotate-0">
//             Discover, Train, <br /> and Recruit Top Talent <br /> Seamlessly
//           </h1>
//           <p className="font-poppins font-normal text-[18px] leading-[27px] align-middle tracking-normal w-[542px] h-[81px]  opacity-100 rotate-0">
//             Secure your future in AI automation by using our platform
//             to go from initial screening to job placement through intelligent assessments,
//             certified training, and verified talent matching.
//           </p>

//           {/* Buttons */}
//           <div className="w-[287px] h-[56px] opacity-100 rotate-0 flex gap-[19px]">
          

//             {/* <button
//   className="w-[134px] h-[56px] opacity-100 rotate-0 rounded-[8px]
//              border flex items-center justify-center"
// >
//   <span
//     className="font-poppins font-medium text-[16px] leading-[16px] tracking-[0.4px] h-[20px]
//                bg-gradient-to-r from-[#007BFF] to-[#1C1F2A] bg-clip-text text-transparent"
//                onClick={() => navigate('/candidate')}
//   >
//     Sign In
//   </span>
// </button> */}
//             <button
//               className="w-[134px] h-[56px] opacity-100 rotate-0 px-[16px] py-[10px] rounded-[8px] bg-gradient-to-r from-[#007BFF] to-[#1C1F2A]"
//               onClick={() => {navigate("/automation")}}
//             >
//               <p className="w-[96px] h-[16px] max-h-[40px] opacity-100 rotate-0
//             font-poppins font-medium text-[16px] leading-[16px] tracking-[0.4px]
//             text-center align-middle text-[#FAFAFA]">Get Started</p>
//             </button>
//           </div>

//           {/* Testimonial */}
//           <div className="w-[393px] h-[68px] left-[100px] opacity-100 rotate-0 flex gap-[15px] items-center">
//             <div>
//             <img
//               src={user}
//               alt="user"
//               className="rounded-full w-[68px] h-[68px] max-w-[640px] opacity-100 rotate-0"
//             />
//             </div>
//             <div>
//             <p className="text-sm text-gray-700">
//               <strong>“NexIT is a life changing discovery”</strong>
//               <br />
//               <span className="text-gray-500">Full Stack Developer</span>
//             </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Content (Graphics + Cards) */}
//         <div className="h-[85%] flex flex-col justify-center">
//         <div className="w-[100] h-[100] opacity-100 rotate-0 gap-[32px]">
//           <div className=" flex flex-row w-[100%] justify-end">

//         <div className="w-[455px] h-[116px] opacity-100 rotate-0 gap-[10px] rounded-[30px] p-4 bg-[#D9D9D9]">
//           <div className="flex felx-row items-center">
//               <img src={avater} alt="avatar" className="w-10 h-10 rounded-full w-[86px] h-[84px] opacity-100 rotate-0 gap-[10px] rounded-[15px] pr-[1px] pl-[1px] bg-[#2ECC71]" />
//               <div className="ml-5">
//                 <h4 className="font-bold">Email/Messages</h4>
//                 <p className="text-sm text-gray-500">Successfully Applied. Congratulations!</p>
//               </div>
//               </div>
//             </div>

//             </div>
        
//       <div className="w-[100%] flex flex-row items-center mb-3">

// <div className="bg-white shadow-lg rounded-2xl p-6 w-[243px] h-[216px] mr-10 mt-4">
//             <h3 className="font-bold text-gray-800 mb-4">Analytics</h3>
//             <div className="flex items-end gap-2">
//               <div className="w-6 h-12 bg-blue-500 rounded-md"></div>
//               <div className="w-6 h-16 bg-green-500 rounded-md"></div>
//               <div className="w-6 h-20 bg-purple-500 rounded-md"></div>
//               <div className="w-6 h-10 bg-blue-400 rounded-md"></div>
//               <div className="w-6 h-14 bg-indigo-400 rounded-md"></div>
//             </div>
// </div>



//  <div className="flex flex-col gap-4 h-[251px] w-[312px] mx-auto pt-3">



//             <div className="flex flex-row items-center w-[264px] h-[73px] opacity-100 gap-[10px] rounded-[15px] border-[3px] p-4 bg-[#007BFF] border-[#FAFAFA]">
//               <span>📄</span>
//               <h4>Submit Document(s)</h4>
//             </div>

//             <div className="flex flex-row items-center w-[264px] h-[73px] opacity-100 bg-[#1C1F2A] gap-[10px] rounded-[15px] border-[3px] border-[#FAFAFA] p-4">
//               <span className=""></span>

//               <h4 className="w-[169px] h-[24px] opacity-100 text-[#FAFAFA] font-poppins font-semibold text-[16px]  align-middle">AI Testing & Analysis</h4>
//             </div>

//             <div className="flex flex-row items-center w-[264px] h-[73px] opacity-100 gap-[10px] rounded-[15px] border-[3px] p-4 bg-[#2ECC71] border-[#FAFAFA]">
//               <span>✅</span>
//               <h4>Interview & Successful</h4>
//             </div>

// </div>




// </div>

//   <div className=" flex flex-row w-[100%] justify-end">

//         <div className="w-[455px] h-[116px] opacity-100 rotate-0 gap-[10px] rounded-[30px] p-4 bg-[#D9D9D9]">
//           <div className="flex felx-row items-center">
//               <img src={avater} alt="avatar" className="w-10 h-10 rounded-full w-[86px] h-[84px] opacity-100 rotate-0 gap-[10px] rounded-[15px] pr-[1px] pl-[1px] bg-[#007BFF]" />
//               <div className="ml-5">
//                 <h4 className="font-bold">Email/Messages</h4>
//                 <p className="text-sm text-gray-500">Successfully Applied. Congratulations!</p>
//               </div>
//               </div>
//             </div>

//             </div>

// </div>
// </div>

//       </div>
//     </div>
  
//   {/* Brands */}

//   <BrandBar />
//   <AboutSection />
//   <ProcessFlow />
// </>;

// }

// export default Landing;





import background from "../assets/images/background.png";
import user from "../assets/images/user.png";
import avater from "../assets/images/avater.png";
import BrandBar from "./Brands";
import AboutSection from "./AboutSection";
import ProcessFlow from "./ProcessFlow";
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  return <>
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Background image anchored to bottom right */}
      <img
        src={background}
        alt="Background"
        className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[700px] h-auto pointer-events-none select-none"
      />

      {/* Navbar */}
      <nav className="relative flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-10 py-5 shadow-md bg-white z-10 gap-4 sm:gap-0">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">NexIT</div>

        {/* Menu */}
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-gray-700 text-sm sm:text-base">
          <li>Home</li>
          <li>About us</li>
          <li>How it Works</li>
          <li>Contact</li>
          <li>FAQs</li>
        </ul>

        {/* CTA */}
        <button className="bg-blue-600 text-white rounded-lg px-4 sm:px-6 py-2 hover:bg-blue-700 text-sm sm:text-base">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row z-10 w-full min-h-screen lg:h-screen opacity-100 rotate-0 justify-center px-4 sm:px-6 lg:px-10 py-8 lg:py-0">
        {/* Left Content */}
        <div className="flex flex-col justify-evenly lg:h-[85%] w-full lg:w-1/2 gap-6 lg:gap-0">
          <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[67.2px] align-middle tracking-normal max-w-full lg:max-w-[653px] opacity-100 rotate-0">
            Discover, Train, <br /> and Recruit Top Talent <br /> Seamlessly
          </h1> 
          <p className="animate-pulse font-poppins font-normal text-base sm:text-lg leading-relaxed lg:leading-[27px] align-middle tracking-normal max-w-full lg:max-w-[542px] opacity-100 rotate-0">
            Secure your future in AI automation by using our platform
            to go from initial screening to job placement through intelligent assessments,
            certified training, and verified talent matching.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 lg:gap-[19px] opacity-100 rotate-0">
            <button
              className="w-full sm:w-[144px] h-[56px] opacity-100 rotate-0 px-[16px] py-[10px] rounded-[8px] bg-gradient-to-r from-[#007BFF] to-[#1C1F2A] transition duration-300 hover:scale-105 shadow-lg"
              onClick={() => {navigate("/automation")}}
              style={{ animationDuration: "1.5s" }}
            >
              <p className="w-full  opacity-100 rotate-0 font-poppins font-medium text-[16px] leading-[16px] tracking-[0.4px] text-center align-middle text-[#FAFAFA] flex items-center justify-center gap-2">
                <span className="inline-block">🚀</span>
                Get Started
              </p>
            </button>
          </div>

          {/* Testimonial */}
          <div className="max-w-full lg:max-w-[393px] opacity-100 rotate-0 flex gap-[15px] items-center">
            <div>
            <img
              src={user}
              alt="user"
              className="rounded-full w-[68px] h-[68px] opacity-100 rotate-0"
            />
            </div>
            <div>
            <p className="text-sm text-gray-700">
              <strong>"NexIT is a life changing discovery"</strong>
              <br />
              <span className="text-gray-500">Full Stack Developer</span>
            </p>
            </div>
          </div>
        </div>

        {/* Right Content (Graphics + Cards) */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 mt-8 lg:mt-0 lg:h-[85%]">
        <div className="w-full opacity-100 rotate-0 gap-[32px]">
          <div className="flex flex-row w-full justify-center lg:justify-end mb-4">
            <div className="w-full sm:w-[455px] max-w-full opacity-100 rotate-0 gap-[10px] rounded-[30px] p-4 bg-[#D9D9D9]">
              <div className="flex flex-row items-center">
                <img src={avater} alt="avatar" className="w-[60px] h-[60px] sm:w-[86px] sm:h-[84px] opacity-100 rotate-0 gap-[10px] rounded-[15px] pr-[1px] pl-[1px] bg-[#2ECC71]" />
                <div className="ml-3 sm:ml-5">
                  <h4 className="font-bold text-sm sm:text-base">Email/Messages</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Successfully Applied. Congratulations!</p>
                </div>
              </div>
            </div>
          </div>
        
          <div className="w-full flex flex-col md:flex-row items-center justify-center lg:justify-end mb-3 gap-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-[243px] h-[216px]">
              <h3 className="font-bold text-gray-800 mb-4">Analytics</h3>
              <div className="flex items-end gap-2">
                <div className="w-6 h-12 bg-blue-500 rounded-md"></div>
                <div className="w-6 h-16 bg-green-500 rounded-md"></div>
                <div className="w-6 h-20 bg-purple-500 rounded-md"></div>
                <div className="w-6 h-10 bg-blue-400 rounded-md"></div>
                <div className="w-6 h-14 bg-indigo-400 rounded-md"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full sm:w-[312px] pt-3">
              <div className="flex flex-row items-center w-full sm:w-[264px] h-[73px] opacity-100 gap-[10px] rounded-[15px] border-[3px] p-4 bg-[#007BFF] border-[#FAFAFA]">
                <span>📄</span>
                <h4 className="text-sm sm:text-base">Submit Document(s)</h4>
              </div>

              <div className="flex flex-row items-center w-full sm:w-[264px] h-[73px] opacity-100 bg-[#1C1F2A] gap-[10px] rounded-[15px] border-[3px] border-[#FAFAFA] p-4">
                <span className=""></span>
                <h4 className="opacity-100 text-[#FAFAFA] font-poppins font-semibold text-sm sm:text-[16px] align-middle">AI Testing & Analysis</h4>
              </div>

              <div className="flex flex-row items-center w-full sm:w-[264px] h-[73px] opacity-100 gap-[10px] rounded-[15px] border-[3px] p-4 bg-[#2ECC71] border-[#FAFAFA]">
                <span>✅</span>
                <h4 className="text-sm sm:text-base">Interview & Successful</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full justify-center lg:justify-end">
            <div className="w-full sm:w-[455px] max-w-full opacity-100 rotate-0 gap-[10px] rounded-[30px] p-4 bg-[#D9D9D9]">
              <div className="flex flex-row items-center">
                <img src={avater} alt="avatar" className="w-[60px] h-[60px] sm:w-[86px] sm:h-[84px] opacity-100 rotate-0 gap-[10px] rounded-[15px] pr-[1px] pl-[1px] bg-[#007BFF]" />
                <div className="ml-3 sm:ml-5">
                  <h4 className="font-bold text-sm sm:text-base">Email/Messages</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Successfully Applied. Congratulations!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  
  {/* Brands */}
  <BrandBar />
  <AboutSection />
  <ProcessFlow />
</>;
}

export default Landing;