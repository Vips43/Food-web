import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FindMeal from "./FindMeal";
import LeftNav from "./LeftNav";

function TopNav() {
 const [open, setOpen] = useState(false);
 const [mealName, setMealName] = useState("");
 const [theme, setTheme] = useState("light");
 const navigate = useNavigate();

 // Load saved theme
 useEffect(() => {
  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);
  document.documentElement.classList.toggle("dark", saved === "dark");
 }, []);

 // Toggle dark/light
 const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  localStorage.setItem("theme", newTheme);
 };

 const handleSearchClick = async () => {
  if (!mealName.trim()) return;
  try {
   const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
   );
   const data = await res.json();
   if (data.meals) {
    navigate(`/viewrecepie/${encodeURIComponent(mealName)}`);
   } else {
    alert("No meal found!");
   }
  } catch (err) {
   console.error("Search failed:", err);
  }
 };

 return (
  <div className="border rounded-md p-2 px-4 flex justify-between items-center gap-4 bg-white dark:bg-gray-900 dark:text-gray-100 shadow-sm">
   {/* Mobile Nav */}
   <div className="lg:hidden md:hidden relative">
    <i
     className="fa-solid fa-bars text-2xl cursor-pointer p-2"
     onClick={() => setOpen(!open)}
    ></i>
    {open && (
     <div className="absolute top-12 left-0 z-50">
      <LeftNav />
     </div>
    )}
   </div>

   {/* Brand */}
   <Link to="/">
    <h1 className="font-semibold capitalize hover:underline text-lg">
     Food Blog
    </h1>
   </Link>

   {/* Search + Theme */}
   <div className="flex items-center gap-4">
    <FindMeal onChange={setMealName} />
    <i
     className="fa-solid fa-magnifying-glass text-yellow-400 cursor-pointer"
     onClick={handleSearchClick}
    ></i>

    {/* Theme Toggle */}
    <button
     onClick={toggleTheme}
     className="p-2 rounded-md border dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
     title={theme === "light" ? "Switch to Dark" : "Switch to Light"}
    >
     {theme === "light" ? (
      <i className="fa-solid fa-moon text-gray-800"></i>
     ) : (
      <i className="fa-solid fa-sun text-yellow-400"></i>
     )}
    </button>
   </div>
  </div>
 );
}

export default TopNav;
