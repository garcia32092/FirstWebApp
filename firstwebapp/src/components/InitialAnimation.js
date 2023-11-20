// InitialAnimation.js
import React from 'react';
import './InitialAnimation.css';

const InitialAnimation = ({ onAnimationEnd }) => {
  return (
    <div className="animation-container" onAnimationEnd={onAnimationEnd}>
      <img src={process.env.PUBLIC_URL + "/BlackKnowledgeLogo.png"} alt="Logo" className="logo-animation" />
    </div>
  );
};

export default InitialAnimation;
