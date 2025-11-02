import React, { useEffect, useState } from "react";

function FindIngredients({ ing }) {
 const [ingredient, setIngredient] = useState("");
 const [loading, setLoading] = useState(false);

 const findIngredient = async () => {
  // logic to find ingredient
  try {
   setLoading(true);
   const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
   );
   const data = await res.json();

   const found = data.meals.find(
    (item) => item.strIngredient.toLowerCase() === ing.toLowerCase()
   );

   if (found) {
    console.log("found it", found);
   } else {
    console.log("not found");
   }
   setIngredient(found);
  } catch (err) {
   console.log("there is an" + err + "error in fetching ingredeints data", err);
  } finally {
   setLoading(false);
  }
 };
 useEffect(() => {
  findIngredient();
 }, [ing]);

 if (loading) {
  return <h2 className="text-center">Finding Ingredient: {ing}...</h2>;
 }

 if (!ingredient) {
  return <p className="text-center text-gray-500">No info found for {ing}</p>;
 }

 return (
  <div className="w-64 border border-gray-200 rounded-md p-3 bg-white shadow-sm mx-auto">
    <img src={ingredient.strThumb} alt="" />
   <h3 className="font-semibold text-center mb-1">
    {ingredient.strIngredient}
   </h3>
   <p className="text-gray-500 text-sm max-h-32 overflow-y-auto">
    {ingredient.strDescription
     ? ingredient.strDescription
     : "No description available."}
   </p>
  </div>
 );
}

export default FindIngredients;
