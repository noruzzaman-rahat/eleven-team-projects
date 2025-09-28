
import './App.css';
import navImg from "./assets/logo.png";
import dollarImg from "./assets/dollar-1.png";

function App() {

  return (
    <>
      <div class="navbar max-w-[1200px] mx-auto">
        <div class="flex-1">
          <a class="text-xl">
            <img className='w-[60px] h-[60px]' src ={navImg} alt="" />
          </a>
        </div>
        <div class="flex items-center">
          <span className='mr-1' >60000000</span>
          <span className='mr-1' >Coin</span>
          <img src={dollarImg} alt=""/>
        </div>
      </div>
    </>
  )
}

export default App
