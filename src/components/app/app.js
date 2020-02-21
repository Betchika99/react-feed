import React, { Component } from 'react';
import Feed from 'components/feed/feed';
import Header from 'components/header/header';
import './app.scss';

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Feed/>
            </>
        )
    }
}

export default App;
