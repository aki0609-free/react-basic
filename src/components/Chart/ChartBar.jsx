import React, { useState } from 'react';
import './ChartBar.css';

export const ChartBar = (props) => {
  let barfillHeight = useState('0%');

  if (props.maxValue > 0) {
    barfillHeight = Math.round((props.value/props.maxValue) * 100 + '%');
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className="chart-bar__fill" style={{height: barfillHeight, backgroundColor: 'red'}} ></div>
      </div>
      <div className="chart-bar__label">
      {props.label}
      </div>
    </div>
  )
}
