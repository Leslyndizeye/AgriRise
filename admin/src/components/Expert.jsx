import React, { useState } from "react";
import {
  GiPotato,
  GiWheat,
  GiTomato,
  GiCorn,
  GiCarrot,
  GiBanana,
  GiFruitBowl,
  GiGrapes,
  GiCabbage,
  GiPeach,
} from "react-icons/gi";

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
      videoLink: "https://youtu.be/d5ni1TT9EG4?si=M7ruoOZQ3CqXswDP",
    },
    {
      id: 2,
      name: "Maize",
      category: "Grains",
      description:
        "Sow maize seeds directly in soil with good drainage. Ensure proper spacing for healthy growth. Requires plenty of sunlight and moderate watering.",
      icon: <GiWheat size={50} className="text-yellow-500" />,
      videoLink: "https://youtu.be/nfMLKP1nXK0?si=LdHBxqNySdLxC_LN",
    },
    {
      id: 3,
      name: "Tomatoes",
      category: "Fruits",
      description:
        "Tomatoes thrive in warm climates with well-drained soil. Stake plants for support and water consistently to prevent cracking.",
      icon: <GiTomato size={50} className="text-red-500" />,
      videoLink: "https://youtu.be/9w-7RoH_uic?si=ZGqyiWVuEZgz74PN",
    },
    {
      id: 4,
      name: "Corn",
      category: "Grains",
      description:
        "Corn requires full sun and fertile, well-drained soil. Water regularly and ensure proper spacing for healthy growth.",
      icon: <GiCorn size={50} className="text-yellow-600" />,
      videoLink: "https://www.youtube.com/watch?v=corn-growing-techniques",
    },
    {
      id: 5,
      name: "Carrots",
      category: "Vegetables",
      description:
        "Carrots grow well in loose, sandy soil. Thin seedlings to ensure enough space for roots to develop properly.",
      icon: <GiCarrot size={50} className="text-orange-500" />,
      videoLink: "https://www.youtube.com/watch?v=carrot-cultivation-guide",
    },
    {
      id: 6,
      name: "Bananas",
      category: "Fruits",
      description:
        "Bananas thrive in warm, humid climates. Provide rich soil, regular watering, and protection from strong winds.",
      icon: <GiBanana size={50} className="text-yellow-400" />,
      videoLink: "https://youtu.be/SgFKfVfghpg?si=Xy5d8mU9vmDYmVty",
    },
    {
      id: 7,
      name: "Apples",
      category: "Fruits",
      description:
        "Apples require cold climates, well-drained soil, and regular pruning. Plant dwarf or standard varieties for higher yield.",
      icon: <GiFruitBowl size={50} className="text-red-400" />,
      videoLink: "https://youtu.be/OwnUtnksO10?si=ACUpykYLBBCqU83b",
    },
    {
      id: 8,
      name: "Grapes",
      category: "Fruits",
      description:
        "Grapes need warm, sunny climates and trellises for support. Prune vines regularly to improve fruit quality.",
      icon: <GiGrapes size={50} className="text-purple-500" />,
      videoLink: "https://youtu.be/8Ik7b6UcDP8?si=TD1a1gyUbXMZBR7v",
    },
    {
      id: 9,
      name: "Cabbage",
      category: "Vegetables",
      description:
        "Cabbage prefers cool weather and fertile, well-drained soil. Water consistently to prevent cracking.",
      icon: <GiCabbage size={50} className="text-green-600" />,
      videoLink: "https://youtu.be/C8wP9rnxlqs?si=ougTe5pqtaBaifnM",
    },
    {
      id: 10,
      name: "Peaches",
      category: "Fruits",
      description:
        "Peaches need full sun and well-drained, fertile soil. Regular pruning and pest management are essential.",
      icon: <GiPeach size={50} className="text-orange-400" />,
      videoLink: "https://youtu.be/KkjyI03yrQs?si=CzaSSLXGuUTXaflP",
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
              <a
                href={crop.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 underline"
              >
                Learn More
              </a>
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
