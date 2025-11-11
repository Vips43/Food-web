import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecepieDetails } from "./APICalls";

function ViewRecepie() {
 const { mealName } = useParams();
 const navigate = useNavigate();
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const fetchData = async () => {
   const result = await getRecepieDetails(mealName);
   setData(result);
   setLoading(false);
  };
  fetchData();
 }, [mealName]);

 if (loading) return <p className="text-center mt-5">Loading recipe...</p>;
 if (!data)
  return <p className="text-center text-red-500">Recipe not found!</p>;

 const ingredients = [];
 for (let i = 1; i <= 20; i++) {
  const ing = data[`strIngredient${i}`];
  const measure = data[`strMeasure${i}`];
  if (ing && ing.trim()) ingredients.push({ ing, measure });
 }

 return (
  <div className="max-w-full m-2 p-3 bg-gray-50 dark:bg-gray-900 dark:text-gray-200 rounded-md">
   <button
    onClick={() => navigate(-1)}
    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md mb-2"
   >
    ← Back
   </button>

   <div className="bg-gray-700 dark:bg-gray-800 text-white p-3 rounded-md">
    <h3 className="capitalize text-center my-1 text-xl font-bold">
     {data.strMeal}
    </h3>

    <div className="flex justify-between flex-wrap text-sm text-gray-200">
     <p>Category: {data.strCategory}</p>
     <p>Origin: {data.strArea}</p>
    </div>

    {data.strYoutube && (
     <a
      href={data.strYoutube}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 justify-end text-red-400 mt-1"
     >
      <h4>YouTube</h4>
      <i className="fa-brands fa-youtube"></i>
     </a>
    )}
   </div>

   <div className="lg:flex gap-3 mt-3">
    <div className="border border-gray-300 dark:border-gray-700 rounded-md p-2">
     <img
      src={data.strMealThumb}
      alt={data.strMeal}
      className="rounded-md"
      loading="lazy"
     />
    </div>

    <div className="w-full p-2 flex flex-col justify-between">
     <div>
      <h3 className="font-bold text-lg w-full lg:w-1/2 text-center  underline uppercase my-2">
       Ingredients
      </h3>
      <ul className="grid grid-cols-2 gap-1">
       {ingredients.map((i, idx) => (
        <li key={idx}>
         <span className="font-semibold">{i.ing}</span> : {i.measure}
        </li>
       ))}
      </ul>
     </div>
     <div>
      <h3 className="font-bold text-center text-xl underline my-2">
       Instructions
      </h3>
      <p className="whitespace-pre-line text-sm">{data.strInstructions}</p>
     </div>
    </div>
   </div>
  </div>
 );
}

export default ViewRecepie;
