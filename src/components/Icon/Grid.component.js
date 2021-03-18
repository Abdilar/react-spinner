import React from 'react';
import PropTypes from 'prop-types';
import {isColorProp, isEmptyString} from "../../utils/functions";

import '../index.style.scss';

const Grid = (props) => {
  const size = 30 * props.ratio;
  const color = isEmptyString(props.color) ? 'currentColor' : props.color;
  const {spinner = ''} = props.className;

  return (
    <span className={`display__inline-block ${spinner}`} style={{width: `${size}px`, height: `${size}px`}}>
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 105 105">
      <circle cx="12.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
      <circle cx="12.5" cy="52.5" r="12.5" fillOpacity="0.5">
        <animate attributeName="fill-opacity" begin="100ms" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="300ms" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
        <animate attributeName="fill-opacity" begin="600ms" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
        <animate attributeName="fill-opacity" begin="800ms" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
        <animate attributeName="fill-opacity" begin="400ms" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="700ms" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="500ms" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
        <animate attributeName="fill-opacity" begin="200ms" calcMode="linear" dur="1s" repeatCount="indefinite" values="1;.2;1"/>
      </circle>
    </svg>
    </span>
  )
};

Grid.defaultProps = {
  color: '',
  ratio: 1
}

Grid.propTypes = {
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  ratio: PropTypes.number
}

export default Grid;
