import React, { useEffect, useState } from "react";
import { getRecepieDetails } from "./APICalls";

function ViewRecepie({ data, onBack }) {
 const ingredients = [];

 for (let i = 0; i < 20; i++) {
  const ingredient = data[`strIngredient${i}`];
  const measure = data[`strMeasure${i}`];
  if (ingredient && ingredient.trim()) {
   ingredients.push({ ingredient, measure });
  }
 }
 ingredients.map((item) => console.log(item));

 return (
  <>
   <div className="max-w-full m-2 p-3">
    <div className="bg-gray-700 text-white p-2 gap-2">
     <h3 className="capitalize text-center">
      <span className="text-gray-400">meal name: </span><span className="font-bold">{data.strMeal} </span>
     </h3>
     <div className="flex gap-2 items-center justify-between flex-wrap">
      <h3 className="capitalize">
       <span className="text-gray-400">meal category: </span><span className="font-bold">{data.strCategory}</span>
      </h3>
      <h3 className="capitalize">
       <span className="text-gray-400">Dish from: </span> <span className="font-bold">{data.strArea} </span>
      </h3>
      <h3 className="capitalize">
       <span className="text-gray-400">Dish type: </span> <span className="font-bold">{data.strMeal}</span>
      </h3>
     </div>
     <div>
      <a
       href={data.strYoutube}
       className="flex items-center gap-2 justify-center"
      >
       <h4>YouTube </h4>
       <i className="fa-brands fa-youtube text-red-600"></i>
      </a>
     </div>
    </div>
    <div className="lg:flex border gap-2">
     <div className="p-2 border border-gray-300">
      <img src={data.strMealThumb} alt="" />
     </div>
     <div className="w-full p-2 flex flex-col">
       
       <div>
      <h3 className="font-bold text-lg my-2 text-center underline uppercase">
       Ingredients
      </h3>
      <ul className="grid grid-cols-2">
       {ingredients.map((item, i) => (
        <li key={i} className="p-1">
         <span className="font-semibold">{item.ingredient}</span> :{" "}
         {item.measure}
        </li>
       ))}
      </ul>
       </div>
     <div className="p-3">
        <h3 className="font-bold text-center text-xl underline my-2">Coocking Instructions</h3>
      <p>{data.strInstructions}</p>
     </div>
     
     </div>
     
    </div>
   </div>
  </>
 );
}

export default ViewRecepie;