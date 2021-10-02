import React,{useEffect, useState} from 'react';
import TodoItem from '../TodoItem';
import PubSub from 'pubsub-js';
//import './components/userListDisplay/UserListDisplay.css';
import '../UserListDisplay/UserListDisplay.css';
const UserListDisplay = () => {
	const USER_LIST='userList';
	const FLAG_DISPLAY='flagDisplay';
	const [resultuserList, setResultUserList] = useState('');

	useEffect(()=>{
		var token = PubSub.subscribe(USER_LIST, mySubscriber);
		// let x=sessionStorage.getItem(USER_LIST);
		// setResultUserList(JSON.parse(x));
	       sessionStorage.setItem(FLAG_DISPLAY,'user_List');
	},[])


	var mySubscriber = function (msg, data) {
		let x=data;
		console.log('ssss',JSON.parse(x));
		setResultUserList(JSON.parse(x));
		//console.log( msg, data );
	};

	// const displayList = () => {
	// 	let x=sessionStorage.getItem(USER_LIST);
	// 	setResultUserList(JSON.parse(x));
	// 	sessionStorage.setItem(FLAG_DISPLAY,'user_List');
	// };
	// if(resultuserList==='' || resultuserList===undefined || resultuserList===null || !resultuserList){
	// 	displayList();
	// }
	console.log('task',resultuserList);
	return (
		<li className={`list-group-item ${'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				 <ul className='list-group'>
					{
						resultuserList && resultuserList!=='' ? 
						resultuserList.map((todo,key) => ( 
							<TodoItem id={todo.id || key} name={todo.name} picture={todo.picture} />
						))
					:
					''
					}
				</ul> 	
			</div>
		</li>
	);
};

export default UserListDisplay;
