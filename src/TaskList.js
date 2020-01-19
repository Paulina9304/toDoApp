import React from 'react';
import Task from './Task'

const TaskList = (props) => {
    
    const active = props.tasks.filter(task=> task.active);
    const done = props.tasks.filter(task => !task.active);

    done.sort((a,b) => b.finishDate - a.finishDate);
    active.sort((a,b) => a.finishDate - b.finishDate);


    const activeTasks = active.map(task => <Task key=
    {task.id} task={task} delete={props.delete} 
    change={props.change}/>)

    const doneTasks = done.map(task => <Task key=
    {task.id} task={task} delete={props.delete} 
    change={props.change}/>)
    return (  
    <div>
        <div className="active">
        <h1>Zadania do zrobienia: </h1>
        {activeTasks.length > 0 ? activeTasks : <p> Brak zadań </p>}
        </div>
        <hr/>

      <div className="done">
      <h3>{`Zadania zrobione ${done.length}`}</h3>  
      {done.length> 5 && <span style ={{fontSize: '10px'}}> Wyświetlono wyłączeni 5 ostatnich zadań</span>}
      {doneTasks.slice(0,5)}
      </div>
    </div>
    );
}
 
export default TaskList;