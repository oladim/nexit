import background2 from "../assets/images/background2.png";
import select from "../assets/images/select.png";
import upload from "../assets/images/upload.png";
import analysis from "../assets/images/analysis.png";
import interview from "../assets/images/interview.png";
import divai from "../assets/images/div.ai.png";
import aitesting from "../assets/images/aitesting.png";

export default function ProcessFlow() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* ================= Submit Documents ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-dashed border-gray-300 p-6 rounded-lg">
          {/* Left - Card */}
           
      
<div className="w-[545px] h-[465px] relative rounded-2xl border bg-[#FBFBFB] border-[#E9E9E9] overflow-hidden">
  {/* Background Image */}
  <img
    src={background2}
    alt="Laptop work"
    className="w-full h-full object-cover rounded-2xl"
  />

  {/* Overlay container for both cards */}
  <div className="absolute top-6 left-6 flex gap-6">
    {/* Est. Total CV Received */}
    <div className="w-[230px] h-[212px] p-[18px] pr-[15px] pl-[15px] rounded-[20px] bg-[#1C1F2A] text-white shadow-lg">
      <div className="w-[167px] h-[38px] opacity-100 rotate-0">
      <h4 className="font-poppins font-semibold text-[15px] leading-[100%] align-middle ">Est. Total CV Received</h4>
      <h3 className="font-poppins font-normal text-[10px] leading-[100%] align-middle">Last 30 days</h3>
     </div>
     <div className="h-24 flex items-end gap-2 w-[198px] h-[106px] mt-5">
      <div className="h-24 flex items-end gap-2 w-[198px] h-[106px] opacity-100 gap-[21px]">
        <div className="bg-gradient-to-r from-[#007BFF] to-[#1C1F2A] bg-blue-400 w-2 h-12"></div>
        <div className="bg-gradient-to-r from-[#007BFF] to-[#1C1F2A] bg-blue-500 w-2 h-20"></div>
        <div className="bg-gradient-to-r from-[#007BFF] to-[#1C1F2A] bg-blue-600 w-2 h-16"></div>
        <div className="bg-gradient-to-r from-[#007BFF] to-[#1C1F2A] bg-blue-700 w-2 h-24"></div>
        <div className="bg-gradient-to-r from-[#007BFF] to-[#1C1F2A] bg-blue-600 w-2 h-16"></div>
        {/* <div className="bg-gradient-to-r from-[#007BFF] to-[#1C1F2A] bg-blue-700 w-2 h-24"></div> */}
      </div>
    <div className="flex flex-col w-[80px] h-[90px] opacity-100 rotate-0 gap-[15px] justify-between">
          <div className="font-poppins font-semibold text-[10px] leading-[100%]">4th Wk</div>
          <div className="font-poppins font-semibold text-[10px] leading-[100%]">3th Wk</div>
          <div className="font-poppins font-semibold text-[10px] leading-[100%]">2nd Wk</div>
          <div className="font-poppins font-semibold text-[10px] leading-[100%]">1st Wk</div>
      </div>
      </div>
    </div>

    {/* Submit Document(s) */}
    {/* <div className="w-[245px] h-[212px] flex items-center justify-center rounded-[20px] bg-[#D6DBDF] shadow-lg">
      <div className="w-[100px] h-[98px] opacity-100 rotate-0 align-middle">📄</div>
      <div className="font-poppins font-semibold text-[20px] leading-[100%] align-middle">Submit Document(s)</div>
    </div> */}

    <div className="w-[245px] h-[212px] flex flex-col items-center justify-center rounded-[20px] bg-[#D6DBDF] shadow-lg gap-[10px]">
  {/* <div className="w-[100px] h-[98px] flex items-center justify-center">📄</div> */} 
  <div className="w-[100px] h-[98px] flex items-center justify-center text-[60px] text-black">
    📄
  </div>

  <div className="font-poppins font-semibold text-[20px] leading-[100%] text-center">
    Submit Document(s)
  </div>
</div>

  </div>

  {/* Legend Section */}
  <div className="fles flex-col absolute bottom-6 left-6 flex gap-4 text-xs text-white w-[491px] h-[161px] rounded-[20px] p-[18px] bg-[#D6DBDF]">
  <div className="flex">
  <div className="flex flex-col justify-center w-[156px] h-[76px] gap-[28px] opacity-100 rotate-0 font-poppins font-semibold text-[16px] leading-[100%] tracking-[0%] text-center align-middle">
    <span className="flex items-center gap-1">
      <span className="bg-[#1C1F2A] w-3 h-3 bg-gray-500 inline-block rounded"></span> <span className="font-poppins font-semibold text-[16px] text-center text-[#1C1F2A]">Income CV</span>
    </span>
    <span className="flex items-center gap-1">
      <span className="w-3 h-3 bg-red-500 inline-block rounded"></span> <span className="font-poppins font-semibold text-[16px] leading-[100%] tracking-[0%] text-center align-middle text-[#1C1F2A]">Rejected CV</span>
    </span>
    </div>
   <div className="flex flex-col justify-center w-[156px] h-[76px] gap-[28px] opacity-100 rotate-0 font-poppins font-semibold text-[16px] leading-[100%] tracking-[0%] text-center align-middle">
    <span className="flex items-center gap-1">
      <span className="w-3 h-3 bg-blue-400 inline-block rounded"></span> <span className="font-poppins font-semibold text-[16px] leading-[100%] tracking-[0%] text-center align-middle text-[#1C1F2A]">Under Review CV</span>
    </span>
    <span className="flex items-center gap-1">
      <span className="w-3 h-3 bg-green-400 inline-block rounded"></span> <span className="font-poppins font-semibold text-[16px] leading-[100%] tracking-[0%] text-center align-middle text-[#1C1F2A]">Approved CV</span>
    </span>
    </div>
    </div>
     <div className="flex items-center w-[455px] h-[37px] gap-[4px] opacity-100 rotate-0">
      <div className="w-[165px] h-[37px] opacity-100 rotate-0 rounded-[8px] bg-[#1C1F2A]"></div>
      <div className="w-[55px] h-[37px] opacity-100 rotate-0 rounded-[8px] bg-[#FF3B30]"></div>
      <div className="w-[130px] h-[37px] opacity-100 rotate-0 rounded-[8px] bg-[#007BFF]"></div>
      <div className="w-[94px] h-[37px] opacity-100 rotate-0 rounded-[8px] bg-[#2ECC71]"></div>
    </div>
    
  </div>
 
</div>



        

          {/* Right - Text */}
          <div className="flex flex-col align-middle justify-center w-[595px] h-[100%] opacity-100 rotate-0 gap-[40px]">
            <h3 className="font-poppins font-semibold text-[56px] leading-[67px] tracking-[0%] align-middle">Submit Documents</h3>
            <p className="font-poppins font-normal text-[18px] leading-[27px] tracking-[0%] align-middle">
              Maintain a complete document submission process — from initial selection through upload stage to review stage.
            </p>

            <div className="flex w-[595px] h-[153px] opacity-100 rotate-0 gap-[60px]">
              <div className="flex flex-col w-[285px] h-[153px] opacity-100 rotate-0 gap-[17px]">
                <span className="flex items-center justify-center w-[46px] h-[46px] opacity-100 rotate-0 rounded-[8px] bg-[#EDEBFB]">
                  <img
    src={upload}
    alt="Upload file"
    className="w-full h-full object-cover rounded-2xl"
  />
                </span>
                <div className="w-[206px] h-[90px] opacity-100 rotate-0 flex flex-col gap-[12px]">
                  <h4 className="w-[185px] h-[30px] opacity-100 rotate-0 font-poppins font-semibold text-[20px] leading-[100%] tracking-[0%] align-middle">Select Documents</h4>
                  <p className="font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] align-middle">Select the required document from your drive or computer.</p>
                </div>
              </div>
              <div className="flex flex-col w-[285px] h-[153px] opacity-100 rotate-0 gap-[17px]">
                <span className="flex items-center justify-center w-[46px] h-[46px] opacity-100 rotate-0 rounded-[8px] bg-[#EDEBFB]">
                  <img
    src={select}
    alt="Upload file"
    className="w-full h-full object-cover rounded-2xl"
  />
                </span>
                <div className="w-[206px] h-[90px] opacity-100 rotate-0 flex flex-col gap-[12px]">
                  <h4 className="w-[185px] h-[30px] opacity-100 rotate-0 font-poppins font-semibold text-[20px] leading-[100%] tracking-[0%] align-middle">Upload Document</h4>
                  <p className=" mt-5 w-[206px] h-[48px] opacity-100 rotate-0 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] align-middle">Upload the selected documents.</p>
                </div>
              </div>
            </div> 
          </div>
        </div>

        {/* ================= AI Analysis & Testing ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-dashed border-gray-300 p-6 rounded-lg">
          {/* Left - Text */}
          <div className="w-[676px] h-[338px] opacity-100 rotate-0 flex flex-col gap-[40px]">
            <div className="w-[620px] h-[145px] opacity-100 rotate-0 flex flex-col gap-[24px]">
            <h3 className="w-[591px] h-[67px] opacity-100 rotate-0 font-poppins font-semibold text-[56px] leading-[67px] tracking-[0%] align-middle">AI Analysis & Testing</h3>
            <p className="w-[620px] h-[54px] opacity-100 rotate-0 font-poppins font-normal text-[18px] leading-[27px] tracking-[0%] align-middle">
              Ensure a comprehensive document submission workflow — covering initial selection, upload, and review stages for AI analysis and testing.
            </p>
            </div>

            <div className="w-[660px] h-[153px] opacity-100 rotate-0 flex gap-[60px]">
              <div className="flex flex-col w-[280px] h-[153px] opacity-100 rotate-0 flex gap-[17px]">
                <span className="flex items-center justify-center w-[46px] h-[46px] opacity-100 rotate-0 rounded-[8px] bg-[#EDEBFB]">
                   <img
    src={analysis}
    alt="analysis file"
    className="w-full h-full object-cover rounded-2xl"
  />
                </span>
                <div className="flex flex-col w-[308px] h-[90px] opacity-100 rotate-0 flex gap-[12px]">
                <h4 className="w-[239px] h-[30px] opacity-100 rotate-0 font-poppins font-semibold text-[20px] leading-[100%] tracking-[0%] align-middle">AI Analysis</h4>
                <p className="w-[308px] h-[48px] opacity-100 rotate-0 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] align-middle">After the upload of document, the AI analyses your information.</p>
              </div>
              </div>
              <div className="flex flex-col w-[308px] h-[153px] opacity-100 rotate-0 flex gap-[17px]">
               <span className="flex items-center justify-center w-[46px] h-[46px] opacity-100 rotate-0 rounded-[8px] bg-[#EDEBFB]">
                <img
    src={interview}
    alt="interview file"
    className="w-full h-full object-cover rounded-2xl"
  />
               </span>
               <div className="flex flex-col w-[308px] h-[90px] opacity-100 rotate-0 flex gap-[12px]">
                <h4 className="w-[239px] h-[30px] opacity-100 rotate-0 font-poppins font-semibold text-[20px] leading-[100%] tracking-[0%] align-middle">AI Interview</h4>
                <p className="w-[260px] h-[48px] opacity-100 rotate-0 font-poppins font-normal text-[16px] leading-[100%] tracking-[0%] align-middle">You proceed to interview conducted by AI after analysis is done.</p>
             </div>
              </div>
            </div>
          </div>

          {/* Right - Card */}
       

<div className="relative w-[546px] h-[467px] rounded-[20px] border border-[1px] bg-[#80BDFF33] flex items-center justify-center">
  {/* Background Image */}
  <img
    src={background2}
    alt="Laptop work"
    className="absolute top-0 left-0 w-full h-full object-cover rounded-[20px]"
  />

  {/* Overlay content */}
  <div className="absolute top-0 left-3 w-full h-full flex flex-col gap-[18px] p-[36px_19px]">
    
    {/* Top Row Images */}
    <div className="flex w-[475px] h-[176px] gap-[14px]">
      <img
        src={divai}
        alt="Laptop work"
        className="w-[274px] h-[176px] rounded-[20px]"
      />
      <img
        src={aitesting}
        alt="Laptop work"
        className="w-[274px] h-[176px] rounded-[20px]"
      />
    </div>

    {/* CV Status Box */}
    <div className="flex flex-col w-[475px] h-[207px] gap-[10px] rounded-[20px] pt-[9px] pr-[16px] pb-[9px] pl-[16px] bg-[#D6DBDF]">
      <h4 className="w-[442px] h-[24px] font-poppins font-medium text-[16px] leading-[100%] tracking-[0%] align-middle">
        CV Status Update
      </h4>
      <ul className="space-y-2 text-sm">
        <li className="flex w-[442px] h-[35px] gap-[33px]">
          <span>Ann Peterson</span><span>12 May, 2025</span><span>Doc.fmt</span><span className="text-yellow-500">Under Review</span>
        </li>
        <li className="flex w-[442px] h-[35px] gap-[33px]">
          <span>Ann Peterson</span><span>12 May, 2025</span><span>Doc.fmt</span><span className="text-green-500">Accepted</span>
        </li>
        <li className="flex w-[442px] h-[35px] gap-[33px]">
          <span>Ann Peterson</span><span>12 May, 2025</span><span>Doc.fmt</span><span className="text-yellow-500">Under Review</span>
        </li>
        <li className="flex w-[442px] h-[35px] gap-[33px]">
          <span>Ann Peterson</span><span>12 May, 2025</span><span>Doc.fmt</span><span className="text-red-500">Declined</span>
        </li>
      </ul>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
