import React from 'react';
import '../../style/components/CommentList/comment-list.css';

const CommentList = (props) => {
    const { comments } = props;
        
    return (
        <div className="comments-container">
            <span className="comments-container__title">Комментарии</span>

            <ul className="comment-list">{
                comments.map(item => {
                    return (
                        <li key={item.id} 
                            className="comment-list__item">
                            <div className="comment__container">
                                <div className="comment__header">
                                    <span className="comment__name">{item.name}</span>
                                    <time className="date-time"
                                    dateTime={item.dateTime}>{item.date}</time>
                                    <button className="comment__btn"
                                        aria-label="удалить комментарий"
                                        onClick={() => props.removeComment(item.id)}
                                    />
                                </div>
                                
                                <p className="comment__text">{item.comment}</p>
                            </div>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}

export default CommentList;