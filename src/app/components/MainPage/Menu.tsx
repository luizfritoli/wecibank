"use client";

import { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

import "../../globals.css";

const Menu = () => {
  const [viewMoney, setViewMoney] = useState<boolean>(false);
  const money: number = 2000;

  const censoredMoney = viewMoney
    ? money.toString()
    : money.toString().replace(/[0-9]/g, "*");
  return (
    <div className="bg-primary vh-20">
      <div className="h-35">
        <span className="d-flex justify-content-center align-items-center fs-1 pt-3">
          Olá, usuário!
        </span>
      </div>
      <div className="d-flex justify-content-center align-items-center h-65 gap-2">
        <span className="fs-1 pb-4 fw-light ms-4">
          R$ {censoredMoney}
        </span>
        <span
          onClick={() => setViewMoney((prev) => !prev)}
          className="fs-1 pb-4 cursor-pointer"
        >
          {viewMoney ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
      </div>
    </div>
  );
};

export default Menu;
