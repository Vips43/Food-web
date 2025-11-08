import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LeftNavNestedCat({ cats }) {
 const [meals, setMeals] = useState([]);
 const unCatUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`;

 const getNestedCategories = async (catName) => {
  try {
   const res = await fetch(unCatUrl + catName);
   const data = await res.json();
   // console.log('nested category data : ', unCatData);
   setMeals(data.meals || []);
  } catch (error) {
   console.log("error in fetching nested categories", error);
  }
 };
 useEffect(() => {
  if (cats) getNestedCategories(cats);
 }, [cats]);

 return (
  <>
   <ul className="ml-2 bg-gray-800 text-gray-400">
    {meals.map((meal, i) => (
     <Link to={`/view_recepie/${encodeURIComponent(meal.strMeal)}`}>
      <li className="p-2 hover:text-gray-300 hover:bg-gray-600"
       key={ meal.idMeal }>
       {i + 1} - { meal.strMeal }
      </li>
     </Link>
    ))}
   </ul>
  </>
 );
}

export default LeftNavNestedCat;
