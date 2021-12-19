import { ADDTODO, COMPLETE, DELETE, EDITTODO } from './ActionsTypes';

const init = [
	{
		id     : Math.random(),
		action : 'Test',
		isDone : false
	}
];

const reducer = (state = init, { type, payload }) => {
	switch (type) {
		case ADDTODO:
			return [ ...state, payload ];
		case DELETE:
			return state.filter((el) => el.id !== payload);
		case COMPLETE:
			return state.map((el) => (el.id === payload ? { ...el, isDone: !el.isDone } : el));
		case EDITTODO:
			return state.map((el) => (el.id === payload.id ? payload : el));
		default:
			return state;
	}
};

export default reducer;
