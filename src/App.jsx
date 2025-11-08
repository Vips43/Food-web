import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

const TopNav = lazy(() => import("./components/TopNav"));
const RandomMeals = lazy(() => import("./components/RandomMeals"));
const ViewRecepie = lazy(() => import("./components/ViewRecepie"));

function App() {
 return (
  <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors">
   <Suspense fallback={<p className="text-center mt-10">Loading...</p>}>
    <TopNav />
    <Routes>
     <Route path="/" element={<RandomMeals />} />
     <Route path="/viewrecepie/:mealName" element={<ViewRecepie />} />
    </Routes>
   </Suspense>
  </div>
 );
}

export default App;
