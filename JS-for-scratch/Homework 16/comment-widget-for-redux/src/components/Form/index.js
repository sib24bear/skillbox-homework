import React, {Component} from 'react';
import '../../style/components/Form/form.css';

class Form extends Component {
	constructor(props) {
      super(props);
      
      this.initialState = {
        name: '',
        comment: '',
        formValid: ''
      };

	  this.state = this.initialState
    }
    
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        if ((this.state.name !== '') && (this.state.comment !== '')) {
            this.props.addComment(this.state.name, this.state.comment);
            this.setState(this.initialState);
        } else {
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