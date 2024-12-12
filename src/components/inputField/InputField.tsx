import { useAppDispatch } from "../../hooks/hooks";
import { useState } from "react";
import { addTask } from "../../reducers/reducer";

export const InputField = () =>{
    const [taskValue, setTaskValue] = useState("");
    const dispatch =  useAppDispatch()
    const addTaskToList = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code == "Enter") {
          if (taskValue === "") return; //Если поле пустое, ничего не добавлять в список
          dispatch(
            addTask({
              id: Math.floor(Math.random() * 1000) + 1,
              value: taskValue,
              isChecked: false,
            })
          );
          setTaskValue("");
        }
      };
    return(
        <input
        placeholder="What need to do?"
        type="text"
        className="list-container_input"
        onChange={(e) => setTaskValue(e.currentTarget.value)}
        onKeyDown={addTaskToList}
        value={taskValue}
      />
    )
}