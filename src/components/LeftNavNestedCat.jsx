import React, { useEffect, useState } from "react";

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
   <ul className="ml-2 bg-gray-200">
    {meals.map((meal, i) => (
     <li className="p-2 text-gray-600 hover:text-gray-950 hover:bg-gray-100" key={meal.idMeal}>
       {i+1} - {meal.strMeal}
     </li>
    ))}
   </ul>
  </>
 );
}

export default LeftNavNestedCat;
