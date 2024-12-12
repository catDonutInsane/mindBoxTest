export type taskType ={
    id: number,
    value : string,
    isChecked : boolean
}

export type IS = {
    taskList : taskType[],
    leftTasks : number
}