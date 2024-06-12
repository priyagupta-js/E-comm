import React from 'react';
import './styles.css';

const menuItems = [
  'Home',
  'About',
  'Services',
  'Portfolio',
  'Blog',
  'Contact'
];

const MenuBar = () => {
  return (
    <div className="menu-bar">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          {item}
        </div>
      ))}
    </div>
  );
};

const App = () => {
    return (
      <div>
        <MenuBar />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));

