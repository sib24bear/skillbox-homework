import React from 'react';
import './comment-list.css';

const UserComment = (props) => {
    const listItem = props.commentData.map((item, index) => {
        return (
            <li key={index} 
                className="comment-list__item">
                <div className="comment__container">
                    <div className="comment__header">
                        <span className="comment__name">{item.name}</span>
                        <time className="date-time"
                        dateTime={item.dateTime}>{item.date}</time>
                        <button className="comment__btn"
                            aria-label="удалить комментарий"
                                onClick={() => props.removeComments(index)}
                        />
                    </div>
                    
                    <p className="comment__text">{item.comment}</p>
                </div>
            </li>
        )
    });

    return <ul className="comment-list">{listItem}</ul>;
}

const CommentList = (props) => {
    const { commentData, removeComments } = props;

    return (
        <div className="comments-container">
            <span className="comments-container__title">Комментарии</span>
            <UserComment commentData={commentData} removeComments={removeComments} />
        </div>
    )
}

export default CommentList;