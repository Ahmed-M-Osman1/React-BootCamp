import React from 'react';
import Option from './Option';

const Options = (props) => (
      <div>
      <div className='widget-header'>
      <h3 className='widget-header__title'>Your options:</h3>
        <button 
        className='button button--link'
        onClick={props.handleDeleteOptions}>
        Remove All
        </button>
        </div>
        {props.options.length === 0 && <p className='widget-massage'>Please add an Item to start</p>}
        {props.options.map((option,index) => (
          <Option
            key={option}
            optionText={option}
            count={index+1}
            handleDeleteOneOption={props.handleDeleteOneOption}
          />
        ))}
          
      
      </div>
    );

export default Options