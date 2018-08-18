import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
    <li>
        <span className='comment'>{text}</span> <span>votes: {votes}</span> 
        <button onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    </li>;

export default Comment;