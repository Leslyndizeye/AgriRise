import React, { useState } from "react";
import { GiPotato, GiWheat, GiTomato, GiCorn, GiCarrot, GiBanana } from "react-icons/gi"; // Removed GiRice

const Expert = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const crops = [
    {
      id: 1,
      name: "Irish Potatoes",
      category: "Vegetables",
      description:
        "Plant Irish potatoes in well-drained, fertile soil. They need full sun and regular watering. Use certified seed potatoes for best results.",
      icon: <GiPotato size={50} className="text-green-500" />,
    },
    {
      id: 2,
      name: "Maize",
      category: "Grains",
      description:
        "Sow maize seeds directly in soil with good drainage. Ensure proper spacing for healthy growth. Requires plenty of sunlight and moderate watering.",
      icon: <GiWheat size={50} className="text-yellow-500" />,
    },
    {
      id: 3,
      name: "Tomatoes",
      category: "Fruits",
      description:
        "Tomatoes thrive in warm climates with well-drained soil. Stake plants for support and water consistently to prevent cracking.",
      icon: <GiTomato size={50} className="text-red-500" />,
    },
    {
      id: 4,
      name: "Corn",
      category: "Grains",
      description:
        "Corn requires full sun and fertile, well-drained soil. Water regularly and ensure proper spacing for healthy growth.",
      icon: <GiCorn size={50} className="text-yellow-600" />,
    },
    {
      id: 5,
      name: "Carrots",
      category: "Vegetables",
      description:
        "Carrots grow well in loose, sandy soil. Thin seedlings to ensure enough space for roots to develop properly.",
      icon: <GiCarrot size={50} className="text-orange-500" />,
    },
    {
      id: 6,
      name: "Rice",
      category: "Grains",
      description:
        "Rice grows best in flooded fields. Maintain a steady water supply and fertile soil for a good harvest.",
      icon: <GiWheat size={50} className="text-blue-500" />, // Using GiWheat as a placeholder
    },
    {
      id: 7,
      name: "Bananas",
      category: "Fruits",
      description:
        "Bananas thrive in warm, humid climates. Provide rich soil, regular watering, and protection from strong winds.",
      icon: <GiBanana size={50} className="text-yellow-400" />,
    },
    {
      id: 8,
      name: "Sweet Potatoes",
      category: "Vegetables",
      description:
        "Sweet potatoes need warm temperatures and sandy, loamy soil. Water regularly and avoid overwatering.",
      icon: <GiPotato size={50} className="text-purple-500" />,
    },
    {
      id: 9,
      name: "Onions",
      category: "Vegetables",
      description:
        "Onions require well-drained soil and full sun. Keep the soil moist but not waterlogged for healthy growth.",
      icon: <GiTomato size={50} className="text-yellow-700" />,
    },
  ];

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 ml-4">
      <h2 className="text-2xl font-bold text-center mb-4">Expert Tips</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a crop (e.g., Irish Potatoes)"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop) => (
            <div
              key={crop.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
            >
              <div className="mb-2">{crop.icon}</div>
              <h3 className="text-xl font-semibold">{crop.name}</h3>
              <p className="text-gray-600 mt-2">{crop.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No crops found.</p>
        )}
      </div>
    </div>
  );
};

export default Expert;
