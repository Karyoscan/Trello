import React, { useState } from "react";
import { FaPlus, FaPen } from "react-icons/fa";
import CardItems from "./CardItems";

interface cards {
  Cards: { id: number; name: string }[];

  setCards: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
      }[]
    >
  >;
  id: number;
  us: string;
}

const Card = ({ Cards, setCards, us, id }: cards) => {
  const [count, setCount] = useState<boolean>(true);
  const [inputName, setInputName] = useState<string>("");
  const [duty, SetDuty] = useState<{ id: number; name: string }[]>([]);
  const [onCahange, SetChange] = useState<string>("");

  const newData = () => {
    onCahange && SetDuty([...duty, { name: onCahange, id: duty.length + 1 }]);

    SetChange("");
  };

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputName(e.target.value);
  };

  const SpanChange = () => {
    setCount((us) => !us);
    setCards((us) =>
      us.map((es) => (es.id === id ? { ...es, name: inputName } : es))
    );
  };

  const Card_Items = duty.map((us) => (
    <CardItems Card={us} key={us.id} duty={duty} SetDuty={SetDuty} id={us.id} />
  ));

  const DeleteItem = () => {
    setCards((us) => us.filter((es) => es.id !== id));
  };

  return (
    <div className=" flex flex-col justify-between h-[500px] w-80  bg-gray-300 shadow-2xl rounded-md">
      <div className="flex flex-col  justify-between ">
        <div className="flex justify-center   font-bold p-2  mb-2 relative ">
          {count ? (
            <p>{us ? us : "Archived"}</p>
          ) : (
            <input
              className="w-48 rounded-md outline-none py-1 px-2 "
              type="text"
              value={inputName}
              onChange={(e) => nameChange(e)}
            />
          )}
          <span
            onClick={() => SpanChange()}
            className="  top-3 items-center font-semibold absolute right-11 text-base "
          >
            <FaPen />
          </span>{" "}
        </div>
        <div className="flex flex-col gap-2  ">
          {duty.length !== 0 && Card_Items}
        </div>
        <div className="flex flex-col gap-2 justify-center items-center    ">
          {duty.length === 0 && (
            <p className="font-bold text-xl pt-44">
              Task Management Application
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col   items-center justify-center relative ">
        <div className=" flex justify-center items-center  w-80">
          <div className="border-b-2 mb-2 flex  items-center  ">
            <input
              type="text"
              value={onCahange}
              onChange={(e) => SetChange(e.target.value)}
              placeholder="Add Task"
              className=" bg-gray-300 text-white  py-1  outline-none  cursor-pointer w-32 border-b-1"
            />
          </div>
          <div
            className="absolute right-12 cursor-pointer "
            onClick={() => (duty.length <= 5 ? newData() : SetChange(""))}
          >
            <FaPlus />
          </div>
        </div>
        <button
          onClick={() => DeleteItem()}
          className="border-2 border-red-500 rounded-md py-1 px-2 mb-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
