import React, { useState } from "react";
import Card from "./Card";
import { FaPlus } from "react-icons/fa";

const Cards = () => {
  const [Cards, setCards] = useState<{ id: number; name: string }[]>([
    { id: 1, name: "" },
  ]);

  const Ekle = () => {
    setCards((us) => [...us, { id: Cards.length + 1, name: "" }]);
  };




  const card = Cards.map((us, index) => (
     <Card
      us={us.name}
      key={index}
      id={us.id}
      Cards={Cards}
      setCards={setCards}
    />
  ));

  return (
    <div className="py-4  flex justify-between">
      <div className="  grid grid-cols-3 row-span-2 gap-8  justify-center items-center">
        {card}
      </div>
      <button
        onClick={() =>  Cards.length<=2 &&   Ekle()}
        className="flex items-center gap-2 bg-white py-2 px-4 font-bold rounded-md h-10  cursor-pointer"
      >
        <FaPlus /> Add Anather List
      </button>
    </div>
  );
};

export default Cards;
