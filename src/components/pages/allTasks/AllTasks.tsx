import { useAppSelector } from "../../../hooks/hooks";
import { TaskItem } from "../../taskItem/TaskItem";
export const AllTasks = () =>{
    const { taskList } = useAppSelector((state) => state.reducer);
    return(
        <div className="task-list">
        {taskList.map((i) => (
          <TaskItem key={i.id} {...i} />
        ))}
      </div>
    )
}