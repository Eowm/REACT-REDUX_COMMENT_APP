import {ADD_COMMENT} from './action';
import {REMOVE_COMMENT} from './action';
import {EDIT_COMMENT} from './action';
import {THUMB_UP_COMMENT} from './action';
import {THUMB_DOWN_COMMENT} from './action';

function comments (state = [], action) {
	switch (action.type) {
		case ADD_COMMENT:
			return [{
					id: action.id,
					text: action.text,
					votesUp: 0,
					votesDown: 0
				},
				...state
			];

		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !== action.id)

		case EDIT_COMMENT:
			return state.map(comment => {
						if (comment.id === action.id)
							return { ...comment,
								text: action.text
							}
						else
							return comment
					});

		case THUMB_UP_COMMENT:
			return state.map(comment => {
					if (comment.id === action.id)
						return { ...comment,
							votesUp: comment.votesUp + 1
						}
					else
						return comment;
				});

		case THUMB_DOWN_COMMENT:
			return state.map(comment => {
					if (comment.id === action.id)
						return { ...comment,
							votesDown: comment.votesDown + 1
						}
					else
						return comment;
				});


		default:
			return state;
	}
}

export default comments;