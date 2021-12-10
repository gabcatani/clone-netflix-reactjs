import React from 'react';
import './Header.css';
import './pngwing.com.png';


export default () => {
    return (
    <header>
        <div className="header--logo">
            <a href="/">
                <img src="https://wallpaperaccess.com/full/712390.jpg" alt="Netflix"/> 
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png" alt="Usuário" />
            </a>
        </div>
    </header>
    );
}