import React, {Component} from 'react';
import './App.css';

class AddTask extends Component {

    minDate = new Date().toISOString().slice(0,10);
    state = {  
        text: '',
        checked: false,
        date: this.minDate,
    }
    handleText = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
    handleDate = (e) => {
        this.setState({
            date:e.target.value,
        })
    }

    handleCheckBox = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }
    handleClick = () => {
        const {text, date, checked} =  this.state;
        if(text.length > 2) {
      const add =  this.props.add(text, date, checked);
      if(add) {
          this.setState({
              text: '',
              checked: false,
              date: this.minDate,
          })
      }
    } else {
        alert('za krótka nazwa')
    }

    }

   
    render() { 
        let maxDate = this.minDate.slice(0,4) *1 + 1;
        maxDate = maxDate +"-12-31";

        return ( 
            <div className="form">
                <input type = "text" placeholder="dodaj zadanie" 
                value = {this.state.text} id="important" onChange = {this.handleText}/>
                <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckBox}/>
                <label htmlFor='important'>Priorytet</label>
                <br></br>
                <label htmlFor="date">Do kiedy zrobić </label>
                <input type = "date" value = {this.state.date} min={this.minDate}
                max={this.maxDate} onChange={this.handleDate}/>
                <br></br>
                <button onClick = {this.handleClick}> Dodaj </button>
            </div>
         )
    }
}
 
export default AddTask;