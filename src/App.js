import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(items);
      setActive("all");
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    setActive(category);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          active={active}
          allCategories={allCategories}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
