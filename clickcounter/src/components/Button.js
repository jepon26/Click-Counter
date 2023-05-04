import React from 'react';
import '../styles/Button.css'

function Button({text, isclickButton, manageClick}){
    return(
        <button 
        className={isclickButton ? 'click-button' : 'restart-button'}
        onClick={manageClick}>   
            {text}
        </button>
    );
}

export default Button;