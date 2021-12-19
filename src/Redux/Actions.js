import { ADDTODO, COMPLETE, EDITTODO } from './ActionsTypes';

export const add = () => {
	return {
		type : ADDTODO
	};
};

export const edit = () => {
	return {
		type : EDITTODO
	};
};

export const comp = () => {
	return {
		type : COMPLETE
	};
};
