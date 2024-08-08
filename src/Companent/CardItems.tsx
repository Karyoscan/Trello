import React, { useState } from "react";
import { FaPen, FaTimes } from "react-icons/fa";

interface Cards {
  Card: { id: number; name: string };
  id: number;
  duty: {
    id: number;
    name: string;
  }[];
  SetDuty: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
}

const Card_items = ({ Card, duty, SetDuty, id }: Cards) => {
  const [conunt, setCount] = useState<boolean>(true);
  const [onChange, SetOnChange] = useState<string>("");

  const ChangeButton = () => {
    setCount((us) => !us);

    SetDuty((us) =>
      us.map((es) => (es.id === id ? { ...es, name: onChange } : es))
    );
  };

  const DeleteDuty = () => {
    const Deger = duty.filter((us) => us.id !== Card.id);
    SetDuty(Deger);
  };

  return (
    <div>
      {Card && (
        <div className="flex justify-between bg-white/80 border cursor-pointer">
          {conunt ? (
            <div className=" m-2 p-1  ">
              {Card.name ? (
                Card.name
              ) : (
                <p className="text-red-600 ">Name Plz</p>
              )}
            </div>
          ) : (
            <input
              className="m-2 p-1 outline-none border-b-green-300 rounded-md   border-2 "
              type="text"
              value={onChange}
              onChange={(e) => SetOnChange(e.target.value)}
            />
          )}
          <div className="flex  gap-4 px-4">
            <button onClick={() => ChangeButton()}>
              {" "}
              <FaPen />
            </button>
            <button onClick={() => DeleteDuty()} className="text-red-500">
              {" "}
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card_items;
