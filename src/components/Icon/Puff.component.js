import React from 'react';
import PropTypes from 'prop-types';
import {isColorProp, isEmptyString} from "../../utils/functions";

import style from '../index.module.scss';

const Puff = (props) => {
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
    <span className={`${style.display_inline_block} ${spinner}`} style={{width: `${size}px`, height: `${size}px`}}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} stroke={color} viewBox="0 0 44 44">
        <g fill="none" fillRule="evenodd" style={{strokeWidth}}>
          <circle cx="22" cy="22" r={1 / props.ratio}>
            <animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20" />
            <animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/>
          </circle>
          <circle cx="22" cy="22" r={1 / props.ratio}>
            <animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/>
            <animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/>
          </circle>
        </g>
      </svg>
    </span>
  )
};

Puff.defaultProps = {
  color: '',
  ratio: 1
}

Puff.propTypes = {
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  ratio: PropTypes.number
}

export default Puff;
