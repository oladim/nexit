import background2 from "../assets/images/background2.png";

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
  <div className="absolute bottom-6 left-6 flex gap-4 text-xs text-white w-[491px] h-[161px] rounded-[20px] p-[18px] bg-[#D6DBDF]">
    <span className="flex items-center gap-1">
      <span className="w-3 h-3 bg-gray-500 inline-block rounded"></span> Income CV
    </span>
    <span className="flex items-center gap-1">
      <span className="w-3 h-3 bg-red-500 inline-block rounded"></span> Rejected CV
    </span>
    <span className="flex items-center gap-1">
      <span className="w-3 h-3 bg-blue-400 inline-block rounded"></span> Under Review CV
    </span>
    <span className="flex items-center gap-1">
      <span className="w-3 h-3 bg-green-400 inline-block rounded"></span> Approved CV
    </span>
  </div>
</div>



        

          {/* Right - Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Submit Documents</h3>
            <p className="text-gray-600 mb-6">
              Maintain a complete document submission process — from initial selection through upload stage to review stage.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-green-500">✅</span>
                <div>
                  <h4 className="font-semibold">Select Documents</h4>
                  <p className="text-gray-600 text-sm">Select the required document from your drive or computer.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500">✅</span>
                <div>
                  <h4 className="font-semibold">Upload Document</h4>
                  <p className="text-gray-600 text-sm">Upload the selected documents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= AI Analysis & Testing ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-dashed border-gray-300 p-6 rounded-lg">
          {/* Left - Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">AI Analysis & Testing</h3>
            <p className="text-gray-600 mb-6">
              Ensure a comprehensive document submission workflow — covering initial selection, upload, and review stages for AI analysis and testing.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold">AI Analysis</h4>
                <p className="text-gray-600 text-sm">After the upload of document, the AI analyses your information.</p>
              </div>
              <div>
                <h4 className="font-semibold">AI Interview</h4>
                <p className="text-gray-600 text-sm">You proceed to interview conducted by AI after analysis is done.</p>
              </div>
            </div>
          </div>

          {/* Right - Card */}
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="flex justify-between mb-6">
              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-md">
                <p className="font-semibold">AI Analyzing</p>
                <p className="text-xs">CV analyzed successfully</p>
              </div>
              <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md">
                <p className="font-semibold">AI Analysis & Testing</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">CV Status Update</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b pb-2">
                  <span>Ann Peterson</span><span>12 May, 2025</span><span>Doc.fmt</span><span className="text-yellow-500">Under Review</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Ann Peterson</span><span>12 May, 2025</span><span>Doc.fmt</span><span className="text-green-500">Accepted</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Ann Peterson</span><span>12 May, 2025</span><span>Doc.fmt</span><span className="text-yellow-500">Under Review</span>
                </li>
                <li className="flex justify-between">
                  <span>Ann Peterson</span><span>12 May, 2025</span><span>Doc.fmt</span><span className="text-red-500">Declined</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
