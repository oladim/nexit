import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.png";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      {/* Top Content */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-poppins font-semibold text-[56px] leading-[67px] tracking-[0] text-center align-middle">
            About NexIT
          </h2>
          <p className="h-[54px] rotate-0 opacity-100 font-poppins font-normal text-[18px] leading-[27px] tracking-[0] text-center align-middle">
            From initial screening to job placement — empower your hiring process with
            intelligent assessments, certified training, and verified talent matching —
            all in one platform.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h3 className="font-inter font-bold text-[48px] leading-[100%] tracking-[0] capitalize w-[451.85px] h-[115.91px] top-[0.11px] rotate-0 opacity-100 relative">
              We Are A Creative <br /> Digital Agency
            </h3>
            <div className="font-poppins font-normal text-[16px] leading-[30px] tracking-[0] w-[556.04px] h-[360px] top-[155.99px] rotate-0 opacity-100 text-[#1C1F2A]">
            <p className="text-gray-600 mb-4">
              NexIT is a dynamic web application designed to revolutionize the tech
              recruitment journey. Serving as a centralized hub for screening, training,
              and recruitment, NexIT bridges the gap between emerging tech talents and
              forward-thinking employers.
            </p>
            <p className="text-gray-600 mb-4">
              Whether you’re a candidate looking to kickstart or elevate your tech career,
              or a company searching for pre-vetted, job-ready professionals, NexIT
              simplifies the process with a seamless, data-driven platform.
            </p>
            <p className="text-gray-600 mb-6">
              With NexIT, the future of tech hiring is not just digital — it’s strategic,
              scalable, and human-centered.
            </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-blue-700 transition">
              Contact us →
            </button>
          </div>

          {/* Right Content - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row justify-end">
            <img
              src={pic1}
              alt="Team working"
              className="rounded-lg object-cover w-[272px] h-[263px] opacity-100 rounded-tl-[50px]"
            />
            </div>
            <div className="flex flex-row items-end">
            <img
              src={pic2}
              alt="Laptop work"
              className="rounded-lg object-cover w-[219.93px] h-[227.05px] opacity-100 rounded-tr-[50px] text-[#D9D9D9] top-[59.93px]"
            />
            </div>
            <div className=" flex flex-row justify-end">
            <img
              src={pic3}
              alt="Office discussion"
              className="rounded-lg object-cover w-[220px] h-[227px] opacity-100 rounded-tl-[50px] text-[#D9D9D9] justify-right"
            />
            </div>
            <img
              src={pic4}
              alt="Team collaboration"
              className="rounded-lg object-cover w-[272px] h-[263px] opacity-100 rounded-br-[50px]"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          <div>
            <h4 className="w-[219px] h-[72px] rotate-0 opacity-100 font-poppins font-bold text-[48px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">567+</h4>
            <p className="w-[219px] h-[30px] rotate-0 opacity-100 font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">Interviews Conducted</p>
          </div>
          <div>
            <h4 className="w-[219px] h-[72px] rotate-0 opacity-100 font-poppins font-bold text-[48px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">4.8k</h4>
            <p className="w-[219px] h-[30px] rotate-0 opacity-100 font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">Job Offered</p>
          </div>
          <div>
            <h4 className="w-[219px] h-[72px] rotate-0 opacity-100 font-poppins font-bold text-[48px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">12+</h4>
            <p className="w-[219px] h-[30px] rotate-0 opacity-100 font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">Industry Experience</p>
          </div>
          <div>
            <h4 className="w-[219px] h-[72px] rotate-0 opacity-100 font-poppins font-bold text-[48px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">2.5k+</h4>
            <p className="w-[219px] h-[30px] rotate-0 opacity-100 font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">Company Helped</p>
          </div>
          <div>
            <h4 className="w-[219px] h-[72px] rotate-0 opacity-100 font-poppins font-bold text-[48px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">120+</h4>
            <p className="w-[219px] h-[30px] rotate-0 opacity-100 font-poppins font-normal text-[20px] leading-[100%] tracking-[0] text-center text-[#1C1F2A]">Won Awards</p>
          </div>
        </div>
      </div>
    </section>
  );
}
