import React from 'react';

const TodoItem = ({ id, name, picture}) => {
	return (
		<li className={`list-group-item ${'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>{id}:{name}</span>
				<img src={picture} id="imgbox1" width="100px" height="100px" alt="img"></img>
			</div>
		</li>
	);
};

export default TodoItem;
