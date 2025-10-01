import React, { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availalbeBalance, purchasedPlayers, setPurchasedPlayers }) => {
  const playerData = use(playersPromise);
  // console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

    {
        playerData.map(player => <PlayerCard 
        purchasedPlayers={purchasedPlayers}  
        setPurchasedPlayers={setPurchasedPlayers}
        availalbeBalance={availalbeBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
    }
    </div>
  );
};

export default AvailablePlayers;
