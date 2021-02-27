import React, { Component } from 'react'
import "./App.css";
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <Link className="NavTextColor" to="Home">
                        <h1>LOGO</h1>
                    </Link>
                    <ul>
                        <Link className="NavTextColor" to="/About">
                            <li>About</li>
                        </Link>
                        <Link className="NavTextColor" to="/Products">
                            <li>Product</li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}
