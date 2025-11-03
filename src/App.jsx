import './App.css'
import TopNav from './components/TopNav'
import RandomMeals from './components/RandomMeals'
import ViewRecepie from './components/ViewRecepie'
 
function App() {

  return (
    <>
    <div className='p-2'>
    <TopNav />
    
    <div className='my-2 '>
      <RandomMeals />

    </div>
    {/* <ViewRecepie/> */}
    </div>
    </>
  )
}

export default App
