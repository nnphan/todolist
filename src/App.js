import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      tasks : []
    }
  }
  // componentWillMount(){
  //   if(localStorage && localStorage.getItem('tasks')){
  //     var tasks = JSON.parse(localStorage.getItem('tasks'));
  //     this.setState({
  //       tasks:tasks
  //     });
  //   }
  // }
  onGenerateData(){
    var tasks = [
      {
        id :this.generateID(),
        name :'Learn English',
        status: true,
      },
      {
        id :this.generateID(),
        name :'Gyming',
        status: true,
      },
      {
        id :this.generateID(),
        name :'Do homework',
        status: false,
      },
      {
        id :this.generateID(),
        name :'Do homeworks',
        status: false
      },
    ];
    
    localStorage.setItem('tasks',JSON.stringify(tasks));
    var tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
  }
  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }
  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4() ;
  }
  render(){
    var {tasks} = this.state; // var tasks = this.state.tasks
    return (
        <div className="container">
          <div className="text-center">
              <h1>Quản Lý Công Việc</h1>
              <hr/>
          </div>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm/>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <button type="button" className="btn btn-primary">
                        <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
              <button type="button" className="btn btn-primary ml-5" onClick={this.onGenerateData()}>
                        <span className="fa fa-plus mr-5"></span>Generate data
              </button>             
              <Control/>
              <TaskList tasks={tasks}/>
            </div>
            
          </div>
        </div>
    );
  }
}

export default App;
