import { ADDTODO, COMPLETE, DELETE, EDITTODO } from './ActionsTypes';

export const add = (newTask) => {
	return {
		type    : ADDTODO,
		payload : newTask
	};
};

export const edit = (editTodo) => {
	return {
		type    : EDITTODO,
		payload : editTodo
	};
};

export const comp = (id) => {
	return {
		type    : COMPLETE,
		payload : id
	};
};

export const del = (id) => {
	return {
		type    : DELETE,
		payload : id
	};
};
