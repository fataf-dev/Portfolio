import React from "react";
const Portfolio = ({ data }) => {
  return (
    <div className="card card-compact bg-base-100 max-w-2xl shadow-xl">
      {data.map((item, index) => (
        <div key={index} className="relative group overflow-hidden">
          <figure>
            <img
              src={item.image}
              alt={`Portfolio item ${index}`}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </figure>

          {/* Overlay GitHub */}
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
            >
              Voir le code sur GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
