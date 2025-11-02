import { useEffect, useState } from "react";
import LeftNavNestedCat from "./LeftNavNestedCat";

function LeftNav() {
 const [categoriesData, setCategoriesData] = useState([]);
 const [selectedCategory, setSelectedCategory] = useState(null);
 const [loading, setLoading] = useState(false);
 const catUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

 const categories = async () => {
  try {
   setLoading(true);
   const res = await fetch(catUrl);
   const data = await res.json();

   setCategoriesData(data.categories || []);
  } catch (error) {
   console.log("error in fetching categories", error);
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  categories();
 }, []);

 const handleClick = (catName) => {
   setSelectedCategory((prev) => (prev === catName ? null : catName));
 };


 return (
  <>
   <div className="absolute min-w-md border border-gray-400 mb-5 bg-white select-none">
    <h1 className="font-semibold text-center border border-gray-200 shadow-xs p-1 m-1">
     All categories
    </h1>

    {loading ? (
     <p className="p-2 text-gray-300">Loading categories...</p>
    ) : (
     <ul className="p-2 grid gap-2">
      {categoriesData.map((cat) => (
       <li
        className="p-1 border border-gray-100 hover:bg-gray-100 rounded-md cursor-pointer"
        key={cat.idCategory}
        onClick={()=> handleClick(cat.strCategory)}
       >
         <div className="flex items-center justify-between">
            {cat.strCategory} 
            <div className={`transition-transform duration-300 ${selectedCategory === cat.strCategory ? 'rotate-180' : ''}`}>
               <i className="fa-solid fa-chevron-down"></i>
            </div>
         </div>
        {selectedCategory === cat.strCategory &&(
         <div className="max-h-52 overflow-auto custom-scrollbar" onClick={(e)=> e.stopPropagation()}>
           <LeftNavNestedCat cats={selectedCategory}/>
         </div>
        )}
       </li>
      ))}
     </ul>
    )}
   </div>
  </>
 );
}

export default LeftNav;
