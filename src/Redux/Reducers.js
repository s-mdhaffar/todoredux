import { ADDTODO } from './ActionsTypes';

const init = {
	id     : '',
	action : '',
	isDone : ''
};

const reducer = (state = init, { type, payload }) => {
	switch (type) {
		case ADDTODO:
			return {
				...state
			};

		default:
			return state;
	}
};

export default reducer;
