import React, { Component } from 'react';
import blogIcon from 'src/blog.svg';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header__icon" src={blogIcon}/>
                <div className="header__label">News Feed</div>
            </div>
        )
    }
}

export default Header;
