import React from 'react';
import Comment from './CommentContainer';
import styles from './CommentsList.css';

const CommentsList = ({comments}) => <ul className='ul'>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;