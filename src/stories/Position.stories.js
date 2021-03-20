import React from 'react';
import Spinner from '../';

import './Story.style.scss';

export default {
  title: 'Position Prop',
  component: Spinner
}

export const position = () => (
  <div>
    <div className="grid">
      <Spinner isLoading={true} position="LEFT" />
      <div className="text-center">left</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} position="CENTER" />
      <div className="text-center">center</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} position="RIGHT" />
      <div className="text-center">right</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} position="TOP" />
      <div className="text-center">top</div>
    </div>
    <div className="grid">
      <Spinner isLoading={true} position="BOTTOM" />
      <div className="text-center bottom-pos">botton</div>
    </div>
  </div>
);
