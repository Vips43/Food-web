import './App.css'
import TopNav from './components/TopNav'
import RandomMeals from './components/RandomMeals'
import ViewRecepie from './components/ViewRecepie'
import { Route, Routes } from 'react-router-dom'
 
function App() {

  return (
    <>
    <div className='p-2'>
      <Routes>
        <Route path='/' element={ <TopNav />} />
        <Route path='/viewrecepie/' element={ <ViewRecepie />} />
      </Routes>
    
    
    <div className='my-2 '>
      <RandomMeals />

    </div>
    </div>
    </>
  )
}

export default App
