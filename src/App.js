import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import deleteList from './components/deleteList/DeleteList';
import taskListDisplay from './components/taskListDisplay/TaskListDisplay';
import updateList from './components/updateList/UpdateList';
import UserListDisplay from './components/UserListDisplay/UserListDisplay';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

const App = () => {
	return (
	<Router>
		<div className='container bg-white p-4 mt-5'>
			<h1>Task Management</h1>
			<AddTodoForm />
			<TodoList />
			<Switch>
			<Route path="/delete" exact component={deleteList}/>
      		<Route path="/updateList" exact component={updateList}/>
      		<Route path="/UserListDisplay" exact component={UserListDisplay}/>
      		<Route path="/taskListDisplay" exact component={taskListDisplay}/>
			</Switch>
		</div>
	</Router>
	);
};

export default App;
