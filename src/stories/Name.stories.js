import React from 'react';
import Spinner from '../';

import './Story.style.scss';

export default {
  title: 'Name Prop',
  component: Spinner
}

export const name = () => (
  <div>
    <div className="grid">
      <Spinner isLoading={true} name="uikit" />
      <div className="text-center">uikit</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} name="puff" />
      <div className="text-center">puff</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} name="ball-triangle" />
      <div className="text-center">ball-triangle</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} name="oval" />
      <div className="text-center">oval</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} name="rings" />
      <div className="text-center">rings</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} name="tail-spin" />
      <div className="text-center">tail-spin</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} name="three-dots" />
      <div className="text-center">three-dots</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} name="grid" />
      <div className="text-center">grid</div>
    </div>
  </div>
);
