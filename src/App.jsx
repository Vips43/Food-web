import './App.css'
import TopNav from './components/TopNav'
import RandomMeals from './components/RandomMeals'

function App() {

  return (
    <>
    <div className='p-2'>
    <TopNav />
    
    <div className='my-2 '>
      <RandomMeals />

    </div>

    </div>
    </>
  )
}

export default App
