import React, { Component } from 'react';
import './feed-controls.scss';

class FeedControls extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const { onAddClick } = this.props;
        const { value } = this.state;
        if (!value) {
            return;
        }
        onAddClick(this.state.value);
        this.setState({ value: '' });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="form__label" htmlFor="post">Tell me something...</label>
                <textarea
                    className="form__input"
                    name="post"
                    placeholder="Moscow winder as summer etc."
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input className="form__button" type="submit" value="Post!"/>
            </form>
        )
    }
}

export default FeedControls;
