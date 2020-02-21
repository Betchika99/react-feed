import React, { Component } from 'react';
import deleteIcon from 'src/x.svg';
import './post.scss';

class Post extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        const { text, date } = this.props;
        const stringDate = new Date(date).toLocaleDateString();

        return (
            <div className="post">
                <img className="post__delete-button" onClick={this.handleDelete} src={deleteIcon} alt="delete"></img>
                <div className="post-info">
                    <div className="post-info__text">{text}</div>
                    <div className="post-info__date">{stringDate}</div>
                </div>
            </div>
        )
    }

    handleDelete() {
        const { id, onDeleteClick } = this.props;
        onDeleteClick(id);
    }
}

export default Post;
