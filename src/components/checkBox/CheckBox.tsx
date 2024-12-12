import { GreenIcon } from "./greenIcon/GrennIcon";
import style from "./CheckBox.module.css";
import { FC } from "react";
import { setIsChecked } from "../../reducers/reducer";
import { useAppDispatch } from "../../hooks/hooks";

export const CheckBox: FC<{ id: number,isChecked:boolean }> = ({ id, isChecked }) => {
  
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${style.checkBox} ${isChecked ? style.unactive : ""}`}
      onClick={() => {
        
        dispatch(setIsChecked(id));
      }}
    >
      <div>
        <GreenIcon checked={!isChecked} />
      </div>
    </div>
  );
};
