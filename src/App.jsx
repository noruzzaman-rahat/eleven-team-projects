import { Suspense, useState } from "react";
import "./App.css";

import { ToastContainer } from 'react-toastify';

import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchplayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
}; 

const playersPromise = fetchplayers();

function App() {

  const [toggle, setToggle] = useState(true);
  const [availalbeBalance, setAvailableBalance] = useState(1000000);
  const[purchasedPlayers, setPurchasedPlayers] = useState([])

  const removePlayer = (p) =>{
    const fileteredData = purchasedPlayers.filter(ply => ply.player_name !== p.player_name)
    console.log(fileteredData)
    setPurchasedPlayers(fileteredData)
    setAvailableBalance(availalbeBalance + parseInt(p.price.split("$").join("").split(",").join("")))
  }
  

  return (
    <>
      <Navbar availalbeBalance={availalbeBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">{
          toggle === true? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`
          }</h1>
        <div>
          <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle===true?"bg-[#E7FE29]":""}`}>Available</button>

          <button onClick={()=>setToggle(false)} className={`py-3 px-4 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]":""}`}>Selected<span> ({purchasedPlayers.length})</span></button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers 
        purchasedPlayers={purchasedPlayers} 
        setPurchasedPlayers={setPurchasedPlayers}
        availalbeBalance={availalbeBalance} setAvailableBalance={setAvailableBalance} playersPromise={playersPromise}></AvailablePlayers>
      </Suspense> : <SelectedPlayers 
      removePlayer={removePlayer}
      purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      }
      
     <ToastContainer /> 
    </>
  );
}

export default App;
