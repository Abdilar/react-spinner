import React from 'react';
import PropTypes from 'prop-types';
import {isColorProp, isEmptyString} from "../../utils/functions";

import '../index.style.scss';

const UIkit = (props) => {
  const strokeWidth = `${1 / props.ratio}px`;
  const size = 30 * props.ratio;
  const color = isEmptyString(props.color) ? 'currentColor' : props.color;
  const {spinner = ''} = props.className;

  return (
    <span className={`uikit uikit-anim-rotate ${spinner}`}>
      <svg width={size} height={size} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" stroke={color} style={{strokeWidth}} cx="15" cy="15" r="14" />
      </svg>
    </span>
  )
};

UIkit.defaultProps = {
  color: '',
  ratio: 1
}

UIkit.propTypes = {
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  ratio: PropTypes.number
}

export default UIkit;
