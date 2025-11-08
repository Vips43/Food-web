import { useNavigate, useParams } from "react-router-dom";
import { getRecepieDetails } from "./APICalls";
import { useEffect, useState } from "react";

function ViewRecepie() {
 const { mealName } = useParams();
 const navigate = useNavigate();
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchData = async () => {
   const result = await getRecepieDetails(mealName);
   if (result) setData(result);
   setLoading(false);
  };
  fetchData();
 }, [mealName]);

 if (loading)
  return <p className="text-center mt-5 bg-gray-100">Loading recepie...</p>;
 if (!data)
  return <p className="text-center mt-5 bg-gray-100">Recepie not found</p>;

 const ingredients = [];

 for (let i = 0; i < 20; i++) {
  const ingredient = data[`strIngredient${i}`];
  const measure = data[`strMeasure${i}`];
  if (ingredient && ingredient.trim()) {
   ingredients.push({ ingredient, measure });
  }
 }

 return (
  <>
   <div className="max-w-full m-2 p-3 bg-gray-600">
    <button
     onClick={() => navigate(-1)}
     className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md mb-2"
    >
     ← Back to Meals
    </button>
    <div className="bg-gray-700 text-white p-2 gap-2">
     <h3 className="capitalize text-center my-1">
      <span className="text-gray-400">meal name: </span>
      <span className="font-bold">{data.strMeal} </span>
     </h3>
     <div className="flex gap-2 items-center justify-between flex-wrap">
      <h3 className="capitalize">
       <span className="text-gray-400">meal category: </span>
       <span className="font-bold">{data.strCategory}</span>
      </h3>
      <h3 className="capitalize">
       <span className="text-gray-400">Dish from: </span>{" "}
       <span className="font-bold">{data.strArea} </span>
      </h3>
      <h3 className="capitalize">
       <span className="text-gray-400">Dish type: </span>{" "}
       <span className="font-bold">{data.strMeal}</span>
      </h3>
     </div>
     <div>
      <a href={data.strYoutube} className="flex items-center gap-2 justify-end">
       <h4>YouTube </h4>
       <i className="fa-brands fa-youtube text-red-600"></i>
      </a>
     </div>
    </div>
    <div className="lg:flex border border-gray-600 gap-2">
     <div className="p-2 border border-gray-700">
      <img loading="lazy" src={data.strMealThumb} alt="" />
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
       <h3 className="font-bold text-center text-xl underline my-2">
        Coocking Instructions
       </h3>
       <p className="whitespace-pre-line">{data.strInstructions}</p>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default ViewRecepie;
