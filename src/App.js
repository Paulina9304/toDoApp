import React, {Component} from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import {BrowserRouter, Link} from 'react-touter-dom'

class App extends Component{
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: 'posprzątać mieszkanie',
        date: '2020-01-20',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'nauka angielskiego',
        date: '2020-01-18',
        important: true,
        active: true,
        finishDate:null,
      },
      {
        id: 2,
        text: 'zakupy spożywcze',
        date: '2020-01-18',
        important: true,
        active: true,
        finishDate:null,
      },
      {
        id: 3,
        text: 'wizyta u fryzjera',
        date: '2020-01-22',
        important: true,
        active: true,
        finishDate:null,
      },
      {
        id: 4,
        text: 'dentysta!!',
        date: '2020-01-23',
        important: true,
        active: true,
        finishDate:null,
      },
      {
        id: 5,
        text: 'trening biegowy (10km)',
        date: '2020-01-19',
        important: true,
        active: true,
        finishDate:null,
      },
      {
        id: 6,
        text: 'poszukać wakacji',
        date: '2020-02-15',
        important: false,
        active: true,
        finishDate:null,
      },
      {
        id: 7,
        text: 'Urodziny Poli <3 !',
        date: '2020-01-31',
        important: true,
        active: true,
        finishDate:null,
      }

    ]
  }

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    }
    this.counter++
    this.setState(prevState => ({
      tasks : [...prevState.tasks, task]
    }))
    return true
  }
  render () {
  return (
    <BrowserRouter>
    <div className="App">
      <h1> TO DO APP</h1>
      <AddTask add={this.addTask}/>
      <TaskList tasks={this.state.tasks}
      delete={this.deleteTask}
      change={this.changeTaskStatus}/>
    </div>
    </BrowserRouter>
    
  );
  }
}

export default App;
