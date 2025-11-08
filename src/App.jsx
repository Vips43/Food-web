import './App.css'
import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
 
const TopNav = lazy(() => import('./components/TopNav'));
const RandomMeals = lazy(() => import('./components/RandomMeals'));
const ViewRecepie = lazy(() => import('./components/ViewRecepie'));


function App() {

  return (
    <>
    <div className='p-2 text-gray-300 bg-gray-950'>
      <Suspense fallback={<div className='flex justify-center in-checked: h-screen'>
        <p className="text-lg text-gray-600">Loading components...</p>
      </div>}>
      
      <TopNav />
      <Routes>
        <Route path='/' element={< RandomMeals/> } />
        <Route path='/view_recepie/:mealName' element={ <ViewRecepie />} />
      </Routes>
      
      </Suspense>
  
    </div>
    </>
  )
}

export default App
