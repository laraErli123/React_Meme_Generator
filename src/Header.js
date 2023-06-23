import './App.css';
import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <img className="header--image" src="./me.jpeg" alt="" />
      <h2 className="header--title">Laras Website</h2>
      <h4 className="header--project">React Course</h4>
    </header>
  );
}
