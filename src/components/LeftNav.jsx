import { useEffect, useState } from "react";

function LeftNav() {
 const [categoriesData, setCategoriesData] = useState([]);
 const [unCategoriesData, setUnCategoriesData] = useState([]);
 const [loading, setLoading] = useState(false);
 const catUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
 const unCatUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`
 const categories = async () => {
  try {
   setLoading(true);
   const res = await fetch(catUrl);
//    const unCatRes = await fetch(unCatUrl+'lamb');
   const data = await res.json();
//    const unCatData = await unCatRes.json();
//    console.log(data);
//    console.log('uncatdata : ', unCatData);
//    console.log(data.categories);
   setCategoriesData(data.categories);



  } catch (error) {
   console.log("error in fetching categories", error);
  } finally {
   // any final steps if needed
   setLoading(false);
  }
 };



 useEffect(() => {
  categories();
 }, []);


 return (
  <>
   <div className="absolute w-48 border border-gray-400 mb-5 bg-white select-none">
    <h1 className="font-semibold text-center border border-gray-200 shadow-xs p-1 m-1">
     All categories
    </h1>

    {loading ? (
     <p className="p-2 text-gray-300">Loading categories...</p>
    ) : (
     <ul className="p-2">
      {categoriesData.map((cat) => (
       <li
        className="p-1 hover:bg-gray-200 rounded-md cursor-pointer"
        key={cat.idCategory}
       >
        {cat.strCategory}
       </li>
      ))}
     </ul>
    )}
   </div>
  </>
 );
}

export default LeftNav;
