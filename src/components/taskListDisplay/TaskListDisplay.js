import React,{useEffect,useState} from 'react';
import TodoItemTask from '../TodoItemTask';
import PubSub from 'pubsub-js';
const TaskListDisplay = () => {
	const USER_TASK='userTask';
	const FLAG_DISPLAY='flagDisplay';
	const [resulttaskList, setResultTaskList] = useState('');
	const [filterList, setFilterList] = useState('');
	useEffect(()=>{
		var token = PubSub.subscribe(USER_TASK, mySubscriber);
		// let x=sessionStorage.getItem(USER_LIST);
		// setResultUserList(JSON.parse(x));
	       sessionStorage.setItem(FLAG_DISPLAY,'user_List');
	},[])


	var mySubscriber = function (msg, data) {
		let x=data;
		setResultTaskList(JSON.parse(x));
		console.log('check',resulttaskList);
	};
	const filter = () => {
		// var x=resulttaskList;
		// var z=x.sort((a, b) => a.priority.localeCompare(b.priority));
		setFilterList(resulttaskList.sort((a, b) => a.priority.localeCompare(b.priority)));
		
	}
	const displayList = () => {
		let x=sessionStorage.getItem(USER_TASK);
		setResultTaskList(JSON.parse(x));
		sessionStorage.setItem(FLAG_DISPLAY,'user_Task');
	};
	if(resulttaskList===''){
		displayList();
	}
	return (
		<div>
		<button className="p-3 mb-2 bg-primary text-white"  onClick={filter} >Filter-priority</button>
		<li className={`list-group-item ${'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				 <ul className='list-group'>
					{
						filterList?
						filterList && filterList!==''? 
							filterList.map((todo,key) => ( 
								<TodoItemTask taskId={todo.id} assignedName={todo.assigned_name ||key} message={todo.message} priority={todo.priority} />
							))
							:
							''
						:
							resulttaskList && resulttaskList!==''? 
							resulttaskList.map((todo,key) => ( 
								<TodoItemTask taskId={todo.id} assignedName={todo.assigned_name ||key} message={todo.message} priority={todo.priority} />
							))
							:
							''
					}
				</ul> 	
			</div>
		</li>
		</div>
	);
};

export default TaskListDisplay;
