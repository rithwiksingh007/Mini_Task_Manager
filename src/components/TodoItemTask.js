import React from 'react';

const TodoItemTask = ({taskId,assignedName, message, priority}) => {
	return (
		<li className={`list-group-item ${'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>Task-Id:-{taskId}</span>
				<span className='d-flex align-items-center'>AssignedName:-{assignedName}</span>
                <span className='d-flex align-items-center'>Message:-{message}</span>
                <span className='d-flex align-items-center'>Priority:-{priority}</span>
				
			</div>
		</li>
	);
};

export default TodoItemTask;
