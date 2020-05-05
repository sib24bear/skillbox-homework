import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../components/Form/index.js';
import CommentList from '../../components/CommentList/index.js';
import { addComment, removeComment } from '../../actions/index.js'
import '../../style/components/App/app.css';

let App = (props) => {
    const { comments, addComment, removeComment } = props;

    return (
        <div className="wrapper">
            <h1 className="title">Ваш комментарий</h1>

            <Form addComment = {addComment} />

            <CommentList comments = {comments} removeComment = {removeComment} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (name, comment) => dispatch(addComment(name, comment)),
        removeComment: (id) => dispatch(removeComment(id))
    }
}

App = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default App;