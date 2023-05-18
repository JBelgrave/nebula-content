import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <h1>Navigation</h1>
            <Link to="/about">about</Link>
            <br/>
            <Link to="/contact">contact</Link>
            <br/>
            <Link to="/projects">projects</Link>
            <br/>
            <Link to="/resume">resume</Link>
        </div>
    );
}