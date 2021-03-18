import React from 'react';
import PropTypes from 'prop-types';
import {isColorProp, isEmptyString} from "../../utils/functions";

import '../index.style.scss';

const Oval = (props) => {
  const strokeRate = props.ratio > 1 ?
    props.ratio < 3 ?
      1 + Math.floor(props.ratio) :
      3 :
    2 * props.ratio;
  const strokeWidth = `${strokeRate / props.ratio}px`;
  const size = 30 * props.ratio;
  const color = isEmptyString(props.color) ? 'currentColor' : props.color;
  const {spinner = ''} = props.className;

  return (
    <span className={`display__inline-block ${spinner}`} style={{width: `${size}px`, height: `${size}px`}}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} stroke={color} viewBox="0 0 38 38">
        <g fill="none" fillRule="evenodd" style={{strokeWidth}} transform="translate(1 1)">
          <circle cx="18" cy="18" r="18" strokeOpacity="0.5"/>
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/>
          </path>
        </g>
      </svg>
    </span>
  )
};

Oval.defaultProps = {
  color: '',
  ratio: 1
}

Oval.propTypes = {
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  ratio: PropTypes.number
}

export default Oval;
