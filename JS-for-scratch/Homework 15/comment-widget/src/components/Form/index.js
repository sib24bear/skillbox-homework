import React, {Component} from 'react';
import './form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: '',
            comment: '',
            date: '',
            dateTime: '',
            formValid: ''
        };

        this.state = this.initialState;
    }

    getDate = () => {
        const date = new Date().toLocaleString();
        const dateTime = new Date().toISOString();

        this.setState({date, dateTime});
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.getDate();
        this.setState({
            [name] : value,
            formValid : ''
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        if ((this.state.name !== '') && (this.state.comment !== '')) {
            this.props.handleSubmit(this.state);
            this.setState(this.initialState);
        } else {
            console.log('ok');
            this.setState({ formValid : 'error' });
        }
    }

    render() {
        const { name, comment, formValid} = this.state;

        return (
            <form 
                onSubmit={this.onFormSubmit}
                className="form">
                <label className="input-title">
                    Имя
                    <input
                        className={`input ${formValid}`} 
                        type="text" 
                        name="name" 
                        id="name"
                        value={name} 
                        onChange={this.handleChange} />
                </label>
                
                <label className="input-title">
                    Комментарий
                    <textarea
                        className={`input comment-field ${formValid}`}
                        name="comment" 
                        id="comment"
                        value={comment} 
                        onChange={this.handleChange} />
                </label>

                <button 
                    className="submit-btn" 
                    type="submit">
                    Отправить
                </button>
            </form>
        );
    }
}

export default Form;