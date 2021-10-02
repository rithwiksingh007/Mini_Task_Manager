import React, { useState } from 'react';

const AddTodoForm = () => {
	const [message, setMessage] = useState('');
	const [priority, setPriority] = useState('');
	const [calender, setCalender] = useState('');
	const [assigned, setAssigned] = useState('');
	const [flag,setFlag]=useState('');

	async function postData() {
		var myHeaders = new Headers();
		myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

		var formdata = new FormData();
		formdata.append("message", message);
		formdata.append("due_date", calender);
		formdata.append("priority", priority);
		formdata.append("assigned_to", assigned);

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
		};

		fetch("https://devza.com/tests/tasks/create", requestOptions)
		.then(response => response.text())
		.then(result => setFlag(result))
		.catch(error => console.log('error', error));
	}

	const onSubmit = (event) => {
		event.preventDefault();
		let obj={
			message:message,
			due_date:calender,
			priority:priority,
			assigned_to:assigned
		}
		console.log('user entered: ' + obj.due_date);
		console.log('user entered: ' + obj.priority);
		postData();
	};

	return (
		<div>
		{ //Check if message failed
        (flag === '')
          ? ''
          :
		  <div className="p-3 mb-2 bg-success text-white">{flag}</div> 
      	}
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<div className="block">
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Message...'
				value={message}
				onChange={(event) => setMessage(event.target.value)}
			></input>
			<label className='sr-only'>Priority</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Priority...'
				value={priority}
				onChange={(event) => setPriority(event.target.value)}
			></input>
			<label className='sr-only'>Assigned</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Assignee....'
				value={assigned}
				onChange={(event) => setAssigned(event.target.value)}
			></input>
			<label className='sr-only'>Calender</label>
			<input
				type='date'
				className='form-control mb-2 mr-sm-2'
				value={calender}
				onChange={(event) => setCalender(event.target.value)}
			></input>
			<button type='submit' className='btn btn-primary mb-2'>
				create
			</button>
			</div>
		</form>
		</div>
	);
};

export default AddTodoForm;
