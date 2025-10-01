import React from "react";

const SelectedCard = ({ player }) => {
  console.log(player);
  return (
    <div className="border-2 mt-2 border-gray-300 p-3  flex justify-between items-center rounded-lg">
      <div className="flex items-center">
        <img
          src={player.player_image}
          className="w-[50px] h-[50px] rounded-lg"
          alt=""
        />
        <div className="ml-3">
          <h1 className="font-bold">{player.player_name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co.com/d061qwDC/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
