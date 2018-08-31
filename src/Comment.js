import React from 'react';
import styles from './Comment.css';

const Comment = ({text, votesUp, votesDown, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>
    <li className='box'>
        <span className='comment'>{text}</span>
        <button onClick={() => editComment(id, prompt('Change comment'))}>Edit</button> <br />  <span>Likes: {votesUp}, Dislikes: {votesDown}</span>  <br />
        <button className='button_plus' onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button className='button_minus' onClick={() => thumbDownComment(id)}>Thumb down</button>
        <button onClick={() => removeComment(id)}>Remove comment</button>
    </li>;

export default Comment;