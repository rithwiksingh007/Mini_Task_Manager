import React, { useState } from 'react';

const DeleteList = () => {
	const [taskid, setTaskId] = useState('');
	const [result, setResult] = useState('');
	const [results1, setResults1] = useState('');

	async function postData({taskids=''}) {
		var myHeaders = new Headers();
		myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

		var formdata = new FormData();
		formdata.append("taskid", taskids);

		var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: formdata,
		redirect: 'follow'
		};

		fetch("https://devza.com/tests/tasks/delete", requestOptions)
		.then(response => response.text())
		.then((results) =>
		 {
			 setResult(results)
		 })
		 .then(()=>{
			 setTimeout(()=> 
				setResults1(result),
				3000				 
			)
		 })
		.catch(error => console.log('error', error));
	}
	const onSubmit = (event) => {
		event.preventDefault();
		let obj={
			taskid:taskid
		}
		console.log(obj);
		postData({taskids:taskid});

	};
	return (
		<div>
		{
			result!==''?
			<div className="p-3 mb-2 bg-success text-white">{result}</div> 
			:
			''
		}
			<li className={`list-group-item ${'list-group-item-success'}`}>
				<div className='d-flex justify-content-between'>
					<span className='d-flex align-items-center'>Enter Task-ID </span>
					<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
						<div className="block">
						<label className='sr-only'>Task-ID</label>
						<input
							type='text'
							className='form-control mb-2 mr-sm-2'
							placeholder='Enter Task-ID...'
							value={taskid}
							onChange={(event) => setTaskId(event.target.value)}
						></input>
						<button type='submit' className='btn btn-primary mb-2'>
							Delete
						</button>
						</div>
					</form>
					
				</div>
			</li>
		</div>
	);
};

export default DeleteList;
