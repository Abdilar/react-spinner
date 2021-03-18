import React from 'react';
import PropTypes from 'prop-types';
import {isColorProp, isEmptyString} from "../../utils/functions";

import '../index.style.scss';

const TailSpain = (props) => {
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
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 38 38">
        <defs>
          <linearGradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
            <stop offset="0%" stopColor={color} stopOpacity="0" />
            <stop offset="63.146%" stopColor={color} stopOpacity="0.631" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(1 1)">
          <path stroke="url(#a)" style={{strokeWidth}} d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              dur="0.9s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </path>
          <circle cx="36" cy="18" r={1 / props.ratio} fill={color} style={{strokeWidth}}>
            <animateTransform
              attributeName="transform"
              dur="0.9s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </circle>
        </g>
      </svg>
    </span>
  )
};

TailSpain.defaultProps = {
  color: '',
  ratio: 1
}

TailSpain.propTypes = {
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  ratio: PropTypes.number
}

export default TailSpain;
