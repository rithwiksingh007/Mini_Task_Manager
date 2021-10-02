import React,{ useState } from 'react';
import TodoItem from './TodoItem';
import './ToDolist.css';
import TodoItemTask from './TodoItemTask';
import {Link} from 'react-router-dom';
import PubSub from 'pubsub-js';

const TodoList = () => {
	const USER_LIST='userList';
	const USER_TASK='userTask';
	const FLAG_DISPLAY='flagDisplay';
	const [resultuserList, setResultUserList] = useState('');

	async function postData({url = '',authtoken='UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',key = '',storedata=''}) {
		// Default options are marked with *
		var myHeaders = new Headers();
		myHeaders.append("AuthToken", authtoken);

		var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
		};

		fetch(url, requestOptions)
		.then(response => response.json())
		//.then(result =>sessionStorage.setItem(key,Object.values(result)))
		.then((results) =>
		 {console.log('aa',Object.values(results))
		 sessionStorage.clear()
		 var x=Object.values(results)
		  sessionStorage.setItem(key,JSON.stringify(x[1]))
		  storedata(JSON.stringify(x[1]))
		  PubSub.publish(key, JSON.stringify(x[1]));
		})
		.catch(error => console.log('error', error));

	}
  const displayList = () => {
	setResultUserList(sessionStorage.getItem(USER_LIST));
	sessionStorage.setItem(FLAG_DISPLAY,'user_List');
		postData({url:'https://devza.com/tests/tasks/listusers',authtoken:'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',key:USER_LIST,storedata:setResultUserList});
		//user_list,delete,create,update

  };
 /* task */
 const displayCreatetaskList = () => {
	setResultUserList(sessionStorage.getItem(USER_TASK));
	sessionStorage.setItem(FLAG_DISPLAY,'user_Task');
		postData({url:'https://devza.com/tests/tasks/list',authtoken:'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a',key:USER_TASK,storedata:setResultUserList});
		//user_list,delete,create,update
  };
 

  console.log('datauser',resultuserList);
	return (
		<div>
		<Link onClick={displayList} className='btn btn-primary mb-2'  to={`/userListDisplay`} >
				 List user
		</Link>   
		{/* delete */}
		<Link className='btn btn-primary mb-2'  to={`/delete`}>
				   Delete
		</Link>
		{/* update */}
		<Link className='btn btn-primary mb-2'  to={`/updateList`} >
				   Update
		</Link>
		<Link  onClick={displayCreatetaskList} className='btn btn-primary mb-2'  to={`/taskListDisplay`}>
				    Task
		</Link>


		{/* {
			sessionStorage.getItem(FLAG_DISPLAY)==='user_List'? 
				 <ul className='list-group'>
					{
						JSON.parse(resultuserList)!==''? 
						JSON.parse(resultuserList).map((todo,key) => ( 
							<TodoItem id={todo.id} name={todo.name} picture={todo.picture} />
						))
					:
					''
					}
				</ul> 
			:
			''	
		} */}
		{/* {
			sessionStorage.getItem(FLAG_DISPLAY)==='user_Task'? 
				 <ul className='list-group'>
					{
						JSON.parse(resultuserList)!==''? 
						JSON.parse(resultuserList).map((todo,key) => ( 
							<TodoItemTask assignedName={todo.assigned_name} message={todo.message} priority={todo.priority} />
						))
					:
					''
					}
				</ul> 
			:
			''	
		} */}
		</div>
	);
};

export default TodoList;
