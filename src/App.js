import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Navbar from './component/Layouts/Navbar';
import About from './component/About';
import Home from './component/Home';
import Test from './component/Test';
/* task */
import TaskCreate from './component/Task/Create';
import TaskIndex from './component/Task/Index';
import TaskEdit from './component/Task/Edit';
import TaskTest from './component/Task/Test';
import TaskImportTask from './component/Task/ImportTask';
/* todo */
import TodoCreate from './component/Todo/Create';
import TodoIndex from './component/Todo/Index';
import TodoShow from './component/Todo/Show';
import TodoEdit from './component/Todo/Edit';
import TodoImport from './component/Todo/ImportData';
//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/test' component={Test}/>
            <Route path='/task' component={TaskIndex}/>
            <Route path='/task_create' component={TaskCreate}/>
            <Route path='/task_edit/:id' component={TaskEdit}/>
            <Route path='/task_test' component={TaskTest}/>
            <Route path='/task_import' component={TaskImportTask}/>
            
            <Route path='/todo' component={TodoIndex}/>
            <Route path='/todo_create' component={TodoCreate}/>
            <Route path='/todo_show/:id' component={TodoShow}/>
            <Route path='/todo_edit/:id' component={TodoEdit}/>
            <Route path='/todo_import' component={TodoImport}/>
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
