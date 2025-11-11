import React, { useState } from "react";
import { Link } from "react-router-dom";

function RandomMeals() {
 const [meals, setMeals] = useState([]);
 const [loading, setLoading] = useState(false);
 const [showMeals, setShowMeals] = useState(false);
 const url = "https://www.themealdb.com/api/json/v1/1/random.php";

 const fetchMeals = async (count = 10) => {
  try {
   setLoading(true);
   const reqs = Array.from({ length: count }, () =>
    fetch(url).then((r) => r.json())
   );
   const res = await Promise.all(reqs);
   setMeals(res.map((r) => r.meals[0]));
  } catch (e) {
   console.error(e);
  } finally {
   setLoading(false);
  }
 };

 const handleToggle = () => {
  setShowMeals(!showMeals);
  if (!showMeals) fetchMeals();
 };

 return (
  <div className="bg-gray-100 dark:bg-gray-800 dark:text-gray-100 p-4 rounded-md mt-4">
   <div className="text-center mb-4">
    <button
     onClick={handleToggle}
     className="border bg-lime-900 hover:bg-lime-800 text-white rounded-md px-4 py-2 transition"
    >
     {showMeals ? "Hide Meals" : "Show Random Meals 🍽"}
    </button>
   </div>

   {showMeals && (
    <>
     <h3 className="text-center font-semibold text-xl mb-3">
      {loading ? "Loading meals..." : "Here are your Random Meals"}
     </h3>

     {loading ? (
      <p className="text-center text-gray-600 dark:text-gray-400">
       Fetching meals...
      </p>
     ) : (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
       {meals.map((item, i) => (
        <li
         key={i}
         className="p-2 hover:bg-white dark:hover:bg-gray-700 transition rounded-md shadow-md"
        >
         <h3 className="capitalize text-center font-medium mb-2">
          {item.strCategory}
         </h3>
         <div className="overflow-hidden rounded-md">
          <img
           src={item.strMealThumb}
           alt={item.strMeal}
           className="w-full hover:scale-105 hover:rotate-2 transition-all rounded-md"
           loading="lazy"
          />
         </div>
         <h4 className="font-semibold text-center mt-2">{item.strMeal}</h4>
         <Link to={`/viewrecepie/${encodeURIComponent(item.strMeal)}`}>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md block mx-auto mt-2">
           View Recipe
          </button>
         </Link>
        </li>
       ))}
      </ul>
     )}
    </>
   )}
  </div>
 );
}

export default RandomMeals;
