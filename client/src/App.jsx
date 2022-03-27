import React,{ useState } from 'react'
import { Navbar,Footer,Loader,Assets,About } from './components';
const App= () => {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Navbar />
        <About />
      </div>
      <div>
        <Assets />
        <Footer/>
      </div>
    </div>
  );
}

export default App
