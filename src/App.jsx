import './App.css'
import TopNav from './components/TopNav'
import RandomMeals from './components/RandomMeals'
import ViewRecepie from './components/ViewRecepie'
import { Route, Routes } from 'react-router-dom'
 
function App() {

  return (
    <>
    <div className='p-2'>
      <TopNav />
      <Routes>
        <Route path='/' element={< RandomMeals/> } />
        <Route path='/view_recepie/:mealName' element={ <ViewRecepie />} />
      </Routes>
    
    </div>
    </>
  )
}

export default App
