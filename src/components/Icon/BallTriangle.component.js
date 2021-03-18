import React from 'react';
import PropTypes from 'prop-types';
import {isColorProp, isEmptyString} from "../../utils/functions";

import '../index.style.scss';

const BallTriangle = (props) => {
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
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} stroke={color} viewBox="0 0 57 57">
        <g fill="none" fillRule="evenodd" style={{strokeWidth}} transform="translate(1 1)">
          <circle cx="5" cy="50" r="5">
            <animate attributeName="cy" begin="0s" calcMode="linear" dur="2.2s" repeatCount="indefinite" values="50;5;50;50"/>
            <animate attributeName="cx" begin="0s" calcMode="linear" dur="2.2s" repeatCount="indefinite" values="5;27;49;5"/>
          </circle>
          <circle cx="27" cy="5" r="5">
            <animate attributeName="cy" begin="0s" calcMode="linear" dur="2.2s" from="5" repeatCount="indefinite" to="5" values="5;50;50;5"/>
            <animate attributeName="cx" begin="0s" calcMode="linear" dur="2.2s" from="27" repeatCount="indefinite" to="27" values="27;49;5;27"/>
          </circle>
          <circle cx="49" cy="50" r="5">
            <animate attributeName="cy" begin="0s" calcMode="linear" dur="2.2s" repeatCount="indefinite" values="50;50;5;50"/>
            <animate attributeName="cx" begin="0s" calcMode="linear" dur="2.2s" from="49" repeatCount="indefinite" to="49" values="49;5;27;49"/>
          </circle>
        </g>
      </svg>
    </span>
  )
};

BallTriangle.defaultProps = {
  color: '',
  ratio: 1
}

BallTriangle.propTypes = {
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  ratio: PropTypes.number
}

export default BallTriangle;
