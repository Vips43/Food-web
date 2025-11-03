import React, { useState } from "react";
import LeftNav from "./LeftNav";
import FindMeal from "./FindMeal";
import FullMealDescription from "./FullMealDescription";
import { Link } from "react-router-dom";

function TopNav() {
 const [open, setOpen] = useState(false);
 const [mealName, setMealName] = useState("");
 const [mealData, setMealData] = useState (null);

 const handleSearchClick = async () => {
  if (mealName.trim() === "") {
    console.log("Please enter a meal name to search.");
    return;
  }

  try {
    console.log("Searching for meal:", mealName);
    // calling API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    const data = await res.json()
    if (data.meals) {
      console.log(data.meals[0]);
      setMealData(data.meals[0]);
      return;
    }else {
      console.log("No meal found with that name.");
    }
  } catch (error) {
    console.log('there is error in fetching the data', error);
  }
 };
 const ToggleEvent = () => {
  setOpen(!open);
 };
 return (
  <>
   <div className="border rounded-md p-2 px-4 flex justify-between items-center  gap-4 transition-all">
    <div className="lg:hidden md:hidden relative">
     <i
      className="fa-solid fa-bars text-2xl cursor-pointer p-2"
      onClick={ToggleEvent}
     ></i>

     {/* Toggle LeftNav visibility */}
     {open && (
      <div
       className={`absolute top-12 -left-4 z-50 transition-all duration-700 ${
        open
         ? "opacity-100 translate-x-0"
         : "opacity-0 -translate-x-10 pointer-events-none"
       }`}
      >
       <LeftNav />
      </div>
     )}
    </div>
    <Link to="/"><h1 className="text-center font-semibold capitalize hover:underline">food blog</h1></Link>
    <div className="flex items-center gap-2">
     <FindMeal onChange={setMealName} />
     <i className="fa-solid fa-magnifying-glass mr-2 text-yellow-400" onClick={ handleSearchClick }></i>
    </div>
   </div>
  {/* Display meal data if available */}
  {mealData && <FullMealDescription meal={mealData} /> }
  </>
 );
}

export default TopNav;
