import './App.css'
import TopNav from './components/TopNav'
import Meals from './components/Meals'
import LeftNavNestedCat from './components/LeftNavNestedCat'

function App() {

  return (
    <>
    <div className='p-2'>
    <TopNav />
    
    <div className='my-2 '>
      <Meals />
    </div>

      {/* <LeftNavNestedCat cats={'goat'}/> */}
    </div>
    </>
  )
}

export default App
