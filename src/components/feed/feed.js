import React, { Component } from 'react';
import Post from 'components/post/post';
import FeedControls from 'components/feed-controls/feed-controls';
import Storage from 'src/storage';
import { sortByDate } from 'src/utils';
import './feed.scss';

class Feed extends Component {
    constructor(props) {
        super(props);
        const posts = Storage.get('posts') || [];
        const lastId = +Storage.get('last_id') || 0;
        this.state = { posts, lastId };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    render() {
        const content = this.renderContent();
        return (
            <>
                <FeedControls onAddClick={this.handleAdd}/>
                { content }
            </>
        )
    }

    renderContent() {
        const { posts } = this.state;
        const placeholder = (
            <div className="placeholder">
                You publish nothing! Use the form above to add post
            </div>
        );

        if (!posts.length) {
            return placeholder;
        }

        const nodes = posts.map((post, index) => (
            <Post {...post} key={index} onDeleteClick={this.handleDelete}/>
        ));

        return (
            <div className="feed">
                { nodes }
            </div>
        );
    }

    handleDelete(postId) {
        const { posts } = this.state;
        const newFeed = [...posts];
        const index = newFeed.findIndex((post) => post.id === postId);
        newFeed.splice(index, 1);
        this.setState({ posts: newFeed }, () => {
            Storage.set('posts', newFeed);
        });
    }

    handleAdd(postText) {
        const { posts, lastId } = this.state;
        const newFeed = [...posts];
        const newLastId = lastId + 1;

        const newPost = {
            id: newLastId,
            text: postText,
            date: new Date()
        };
        newFeed.push(newPost);
        sortByDate(newFeed);

        this.setState(
            { posts: newFeed, lastId: newLastId },
            () => {
                Storage.set('posts', newFeed);
                Storage.set('last_id', newLastId);
            }
        );
    }
}

export default Feed;
