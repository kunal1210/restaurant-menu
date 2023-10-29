import React, { useCallback, useState } from "react";

const Categories = ({ filterItems, allCategories, active }) => {
  return (
    <div className="btn-container">
      {allCategories.map((category) => {
        const isActive = category == active;
        return (
          <button
            className={`filter-btn ${isActive ? "active" : ""}`}
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
