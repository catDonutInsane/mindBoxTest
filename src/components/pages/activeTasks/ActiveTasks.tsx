import { useAppSelector } from "../../../hooks/hooks";
import { TaskItem } from "../../taskItem/TaskItem";
export const ActiveTasks = () =>{
    const { taskList } = useAppSelector((state) => state.reducer);
    return(
        <div className="task-list">
        {taskList.filter(i=>i.isChecked===false).map((i) => (
          <TaskItem key={i.id} {...i} />
        ))}
      </div>
    )
}