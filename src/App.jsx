import { useRef } from 'react'
import './App.css'
import moon from './moon.png';
import land from './land.png';
import cat from './cat.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  // const [count, setCount] = useState(0)
const ref =useRef();
  return (
    <div>

<Parallax pages={4} ref={ref}>

<ParallaxLayer 
          offset={0}
          speed={1}
          factor={2}
          style={{
           backgroundImage: `url(${moon})`,
           backgrounSize: 'cover',
          }} />


<ParallaxLayer 
sticky={{start: 0.9, end: 3.5}}>
  <img src={cat}/>
</ParallaxLayer>


<ParallaxLayer 
          offset={2}
          speed={1}
          factor={4}
          style={{
           backgroundImage: `url(${land})`,
           backgrounSize: 'cover',
          }}></ParallaxLayer>

     <ParallaxLayer 
     offest={0.2}
     speed={0.5}
     onClick={() => ref.current.scrollTo(3)}>
            <h2>Welcome to my website</h2>
            
        </ParallaxLayer>
       

        <ParallaxLayer 
        offset={3.2} 
        speed={2}
        onClick={() => ref.current.scrollTo(0)}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer>
</Parallax>
    
    {/* <div className="App"> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
  {/* </div> */}
    </div>
  );
}

export default App
