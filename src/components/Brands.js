export default function BrandBar() {
  const brands = [
    { name: "Proline", icon: "⚡" },
    { name: "DevWise", icon: "🌐" },
    { name: "Invert", icon: "⭕" },
    { name: "ProLine", icon: "⚡" },
    { name: "Hitech", icon: "♜" },
    { name: "Flash", icon: "⚡" },
    { name: "Pro", icon: "⚡" },
  ];

  return (
    <div className="w-full bg-[#1c1c24] py-6 flex justify-center">
      <div className="flex gap-12 flex-wrap justify-center">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex items-center gap-2 text-white text-lg font-semibold">
            <span className="text-xl">{brand.icon}</span>
            <span>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}