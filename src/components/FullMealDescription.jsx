import { useState } from "react";
import FindIngredients from "./FindIngredients";

function FullMealDescription({ meal }) {
    const [ selectedIng, setSelectedIng ] = useState(null);

 if (!meal) return null;

 const ingredients = [];
 for (let i = 1; i <= 20; i++) {
  const ingredient = meal[`strIngredient${i}`];
  const measure = meal[`strMeasure${i}`];
  if (ingredient) {
   ingredients.push({ingredient, measure} );
  } else {
   break;
  }
//   console.log(ingredients);
 }

 
 const formatInstructions = (text) => {
  if (!text) return [];
  // split on the word "step" (case-insensitive)
  const steps = text.split(/step\s*/i).filter((s) => s.trim() !== "");
  return steps.map((step, index) => `Step ${index + 1}: ${step.trim()}`);
 };

 const formattedSteps = formatInstructions(meal.strInstructions);
 return (
  <>
   <div className="border border-gray-300 m-5 mx-auto w-2xl p-3">
    <h2 className="text-center text-xl">
     Category: <span className="font-semibold">{meal.strCategory}</span>{" "}
    </h2>
    <img src={meal.strMealThumb} className="p-3" alt="" />
    <div>
     <h1 className="font-semibold text-xl text-center capitalize">
      Ingredients with Measure for <span>{meal.strMeal}</span>
     </h1>
     <ul className="grid grid-cols-2 gap-1 p-1 bg-gray-300">

      { ingredients.map((ing,i) => (
       <li className="bg-white px-2 capitalize" key={i}>
        <span className="text-gray-500">{ing.measure}</span> - 
        <span className="hover:underline" onClick={()=> setSelectedIng(ing.ingredient)}>{ing.ingredient}
            
        </span>  
       </li>
      ))}
      
     </ul>
    </div>
    <div>
     <p className="font-semibold">Description</p>
     <div className="text-gray-700 leading-relaxed space-y-2">
      {formattedSteps.length > 0 ? (
       formattedSteps.map((step, index) => (
        <p key={index} className="capitalize">
         {step}
        </p>
       ))
      ) : (
       <p>{meal.strInstructions}</p>
      )}
     </div>
    </div>

    {selectedIng &&(
        <div className="mt-5">
            <h2>Ingredient Details</h2>
            <FindIngredients ing={selectedIng} />
        </div>
    )}
   </div>
  </>
 );
}

export default FullMealDescription;
