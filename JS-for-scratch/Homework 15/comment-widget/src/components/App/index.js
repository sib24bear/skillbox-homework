import React, { Component } from 'react';
import Form from '../Form';
import CommentList from '../CommentList';
import './app.css';

class App extends Component {
    state = {
        comments: []
    };

    componentDidUpdate() {
        localStorage.setItem('commentsList', JSON.stringify(this.state));
    }

    componentDidMount() {
        if(localStorage.getItem('commentsList')) {
            try {
                this.setState(JSON.parse(localStorage.getItem('commentsList')));
            } catch (err) {
                alert('ошибка данных')
            }
        }
    }

    removeComments = index => {
        const { comments } = this.state;
    
        this.setState({
            comments: comments.filter((comment, i) => { 
                return i !== index;
            })
        });
    }
    
    handleSubmit = comment => {
        this.setState({comments: [comment, ...this.state.comments]});
    }

    render() {
        const { comments } = this.state; 

        return (
            <div className="wrapper">
                <h1 className="title">Ваш комментарий</h1>

                <Form handleSubmit={this.handleSubmit} />

                <CommentList 
                    commentData={comments}
                    removeComments={this.removeComments}
                />
            </div>
        );
    }
}

export default App;