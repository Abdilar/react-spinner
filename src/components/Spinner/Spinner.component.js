import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {MODE, NAME, POSITION, RELATIVE_CLASS, DEACTIVE_CLASS, POSITION_MAP, DIRECTION} from '../../configs/variables';
import setState from '../../hooks/setState.hook';
import {isColorProp, isEmptyString, randomNumber} from '../../utils/functions';
import * as Component from '../';

import style from '../index.module.scss';

const Spinner = (props) => {
  const {name} = props;
  const [id, setId] = setState('react-spinner');
  const [, setIsRTL, getIsRTL] = setState(false);
  const spinnerRef = useRef(null);
  const mode = props.mode === MODE.FULL ? style.mode__full : style.mode__inside;
  const color = props.dark  ? 'dark' : 'light';
  const overlay = props.overlay ? style[`overlay__${color}`] : '';
  const blur = props.blur ? style.blur : '';
  const {wrapper = ''} = props.className;

  const getIcon = () => {
    switch (name) {
      case NAME.UIKIT:
        return <Component.UIkit {...props} />
      case NAME.BALL_TRIANGLE:
        return <Component.BallTriangle {...props} />
      case NAME.GRID:
        return <Component.Grid {...props} />
      case NAME.OVAL:
        return <Component.Oval {...props} />
      case NAME.PUFF:
        return <Component.Puff {...props} />
      case NAME.RINGS:
        return <Component.Rings {...props} />
      case NAME.TAIL_SPIN:
        return <Component.TailSpin {...props} />
      case NAME.THREE_DOTS:
        return <Component.ThreeDots {...props} />
      default:
        return <Component.UIkit {...props} />
    }
  };

  const didMount = () => {
    (async () => {
      toggleSpinner(false);
      calculateRTL();
      calcFullMode();
      await getPosition();
    })()
  };

  useEffect(() => {
    didMount();
  }, []);

  useEffect(() => {
    const id = !isEmptyString(props.id) ? props.id : `react-spinner-${randomNumber(10000)}`;
    setId(id);
  }, [props.id]);


  useEffect(() => {
    toggleSpinner(props.isLoading)
  }, [props.isLoading]);

  useEffect(() => {
    getPosition();
  }, [props.position, props.overlay, props.blur, props.dark, props.mode]);

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
      parent.classList.add(style[RELATIVE_CLASS]);
      return;
    }
    parent.classList.remove(style[RELATIVE_CLASS]);
  };

  const toggleSpinner = (isActive) => {
    const spinner = spinnerRef.current;
    if (!isActive) {
      spinner.classList.add(style[DEACTIVE_CLASS]);
      return;
    }
    spinner.classList.remove(style[DEACTIVE_CLASS]);
  };

  const getPosition = () => {
    (async () => {
      const spinner = spinnerRef.current;
      Object.keys(POSITION_MAP).forEach(item => spinner.classList.remove(style[POSITION_MAP[item]]));
      const positionDir = await getIsRTL() ? POSITION.RTL : POSITION.LTR;
      const position = positionDir[props.position];
      spinner.classList.add(style[POSITION_MAP[position]]);
    })();
  };

  return (
    <div id={id} ref={spinnerRef} className={`${style.react_spinner_anim} ${mode} ${overlay} ${blur} ${wrapper}`}>
      {getIcon()}
    </div>
  )
};

Spinner.defaultProps = {
  blur: false,
  className: {},
  color: '',
  dark: false,
  isLoading: false,
  mode: MODE.INSIDE,
  name: NAME.UIKIT,
  overlay: false,
  position: POSITION.LTR.CENTER,
  ratio: 1
};

Spinner.propTypes = {
  blur: PropTypes.bool,
  className: PropTypes.object,
  color: (props, propName, componentName) => isColorProp(props, propName, componentName),
  dark: PropTypes.bool,
  id: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  mode: PropTypes.string,
  name: PropTypes.string,
  overlay: PropTypes.bool,
  position: PropTypes.string,
  ratio: PropTypes.number
};

export default Spinner;
