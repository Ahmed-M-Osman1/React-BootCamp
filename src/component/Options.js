import React from 'react';
import Option from './Option';

const Options = (props) => (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an Item to start</p>}
        {props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOneOption={props.handleDeleteOneOption}
          />
        ))}
      </div>
    );

export default Options