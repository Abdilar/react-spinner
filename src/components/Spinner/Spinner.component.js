import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {MODE, NAME, POSITION, RELATIVE_CLASS, DEACTIVE_CLASS, POSITION_MAP, DIRECTION} from '../../configs/variables';
import {isColorProp, isEmptyString, randomNumber} from '../../utils/functions';
import {BallTriangle, Grid, Oval, Puff, Rings, TailSpin, ThreeDots, UIkit} from '../';

const Spinner = (props) => {
  const {name, id} = props;
  const [isRTL, setIsRTL] = useState(false);
  const spinnerRef = useRef(null);
  const mode = props.mode === MODE.FULL ? 'mode--full' : 'mode--inside';
  const color = props.dark  ? 'dark' : 'light';
  const overlay = props.overlay ? `overlay--${color}` : '';
  const blur = props.blur ? 'blur' : '';
  const {spinnerWrapper = ''} = props.className;

  const getIcon = () => {
    switch (name) {
      case NAME.UIKIT:
        return <UIkit {...props} />
      case NAME.BALL_TRIANGLE:
        return <BallTriangle {...props} />
      case NAME.GRID:
        return <Grid {...props} />
      case NAME.OVAL:
        return <Oval {...props} />
      case NAME.PUFF:
        return <Puff {...props} />
      case NAME.RINGS:
        return <Rings {...props} />
      case NAME.TAIL_SPIN:
        return <TailSpin {...props} />
      case NAME.THREE_DOTS:
        return <ThreeDots {...props} />
      default:
        return <UIkit {...props} />
    }
  }

  useEffect(() => {
    calculateRTL();
    calcFullMode();
    toggleSpinner(false);
  }, []);

  useEffect(() => {
    toggleSpinner(props.isLoading)
  }, [props.isLoading]);

  useEffect(() => {
    calcFullMode();
  }, [props.mode]);

  const calculateRTL = () => {
    const html = document.getElementsByTagName('html')[0];
    const isRTL = isEmptyString(html.dir) ?
      false :
      html.dir === DIRECTION.RTL;
    setIsRTL(isRTL);
  };

  const calcFullMode = () => {
    const parent = spinnerRef.current.parentElement;

    if (props.mode === MODE.INSIDE) {
      parent.classList.add(RELATIVE_CLASS);
      return;
    }
    parent.classList.remove(RELATIVE_CLASS);
  }

  const toggleSpinner = (isActive) => {
    const spinner = spinnerRef.current;

    if (!isActive) {
      spinner.classList.add(DEACTIVE_CLASS);
      return;
    }
    spinner.classList.remove(DEACTIVE_CLASS);
  }

  const getPosition = () => {
    const positionDir = isRTL ? POSITION.RTL : POSITION.LTR;
    const position = positionDir[props.position];
    console.log('get pos: ', isRTL, props.position, positionDir, position, POSITION_MAP[position])
    return POSITION_MAP[position];
  }

  return (
    <div id={id} ref={spinnerRef} className={`${mode} ${overlay} ${blur} ${spinnerWrapper} ${getPosition()}`}>
      {getIcon()}
    </div>
  )
};

Spinner.defaultProps = {
  blur: false,
  className: {},
  color: '',
  dark: false,
  id: `spinner-${randomNumber(10000)}`,
  isLoading: false,
  mode: MODE.INSIDE,
  name: NAME.BALL_TRIANGLE,
  overlay: false,
  position: POSITION.LTR.BOTTOM,
  ratio: 1
};

Spinner.propTypes = {
  blur: PropTypes.bool,
  className: PropTypes.object,
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  dark: PropTypes.bool,
  id: PropTypes.string,
  isLoading: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string,
  overlay: PropTypes.bool,
  position: PropTypes.string,
  ratio: PropTypes.number
};

export default Spinner;
