import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { clearCompleted } from "../../reducers/reducer";
import style from "./Navigation.module.css";
import { CastomLink } from "../customLink/CustomLink";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const { leftTasks } = useAppSelector((state) => state.reducer);
  const removeCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <nav className={style.container}>
      <div>
        <span>{leftTasks} left</span>
      </div>
      <div className={style.pages}>
        <CastomLink text={"All"} href={"/"} />
        <CastomLink text={"done"} href={"/complete"} />
        <CastomLink text={"active"} href={"/active"} />
      </div>
      <div className={style.clear_completed_button} onClick={removeCompleted}>
        Clear completed
      </div>
    </nav>
  );
};
