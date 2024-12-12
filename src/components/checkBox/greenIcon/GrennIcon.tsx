import { FC } from "react";
import style from "./GreenIcon.module.css"

type CheckedType = {
    checked : boolean
}
export const GreenIcon:FC<CheckedType> = ({checked}) => {
  return (
    <svg
    className={checked?style.iconUnchecked:style.iconChecked}
      id="Layer_1"
      version="1.1"
      viewBox="-130 -100 768 768"
      xmlns="http://www.w3.org/2000/svg"
      fill="green"
    >
      <style type="text/css"  ></style>
      <g>
        <polygon points="434.8,49 174.2,309.7 76.8,212.3 0,289.2 174.1,463.3 196.6,440.9 196.6,440.9 511.7,125.8 434.8,49     " />
      </g>
    </svg>
  );
};
