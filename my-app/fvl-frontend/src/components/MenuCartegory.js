import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/combo";

export default function MenuCategories() {
  return (
    <div className="flex justify-center gap-4 py-4">
      {categories.map((category) => (
        <Link
          to={category.link}
          key={category.id}
          className="flex flex-col items-center bg-gray-200 rounded-lg p-4 hover:bg-gray-300"
        >
          <img
            src={`assets/${category.id}.png`} // Dynamically load the image based on id
            alt={category.name}
            className="w-12 h-12 mb-2"
          />
          <span className="text-sm font-bold">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
