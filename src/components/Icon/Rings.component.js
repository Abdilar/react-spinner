import React from 'react';
import PropTypes from 'prop-types';
import {isColorProp, isEmptyString} from "../../utils/functions";

import '../index.style.scss';

const Rings = (props) => {
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
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} stroke={color} viewBox="0 0 45 45">
        <g fill="none" fillRule="evenodd" style={{strokeWidth}} transform="translate(1 1)">
          <circle cx="22" cy="22" r="6" strokeOpacity="0">
            <animate attributeName="r" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="6;22"/>
            <animate attributeName="stroke-opacity" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="1;0"/>
            <animate attributeName="stroke-width" begin="1.5s" calcMode="linear" dur="3s" repeatCount="indefinite" values="2;0"/>
          </circle>
          <circle cx="22" cy="22" r="6" strokeOpacity="0">
            <animate attributeName="r" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="6;22"/>
            <animate attributeName="stroke-opacity" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="1;0"/>
            <animate attributeName="stroke-width" begin="3s" calcMode="linear" dur="3s" repeatCount="indefinite" values="2;0"/>
          </circle>
          <circle cx="22" cy="22" r="8">
            <animate attributeName="r" begin="0s" calcMode="linear" dur="1.5s" repeatCount="indefinite" values="6;1;2;3;4;5;6"/>
          </circle>
        </g>
      </svg>
    </span>
  )
};

Rings.defaultProps = {
  color: '',
  ratio: 1
}

Rings.propTypes = {
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  ratio: PropTypes.number
}

export default Rings;
