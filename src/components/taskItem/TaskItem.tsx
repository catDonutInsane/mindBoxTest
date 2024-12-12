import { FC } from "react";
import { CheckBox } from "../checkBox/CheckBox";
import { taskType } from "../../types/types";
import style from "./TaskItem.module.css";

export const TaskItem: FC<taskType> = ({ value, id, isChecked }) => {
  return (
    <div className={style.taskContainer}>
      <CheckBox id={id} isChecked={isChecked} />
      <div className={style.taskContainer_value}>
        <span className={isChecked ? style.checked : style.unchecked}>
          {value}
        </span>
      </div>
    </div>
  );
};
