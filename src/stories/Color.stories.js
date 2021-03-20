import React from 'react';
import Spinner from '../';

import './Story.style.scss';

export default {
  title: 'Color Prop',
  component: Spinner
}

export const color = () => (
  <div>
    <div className="grid grid-color">
      <Spinner isLoading={true} color="#ff004b" />
      <div className="text-center">
        <p>hexadecimal:</p>
        <p>#ff004b</p>
      </div>
    </div>
    <div className="grid grid-color">
      <Spinner isLoading={true} color="rgb(124, 100, 0)" />
      <div className="text-center">
        <p>rgb:</p>
        <p>rgb(124, 100, 0)</p>
      </div>
    </div>
    <div className="grid grid-color">
      <Spinner isLoading={true} color="rgb(100%, 2.5%, 0%)" />
      <div className="text-center">
        <p>rgb:</p>
        <p>rgb(100%, 2.5%, 0%)</p>
      </div>
    </div>
    <div className="grid grid-color">
      <Spinner isLoading={true} color="rgba(255, 0, 0, 0.5)" />
      <div className="text-center">
        <p>rgba:</p>
        <p>rgba(255, 0, 0, 0.5)</p>
      </div>
    </div>
    <div className="grid grid-color">
      <Spinner isLoading={true} color="hsl(140, 2%, 50%)" />
      <div className="text-center">
        <p>hsl:</p>
        <p>hsl(140, 2%, 50%)</p>
      </div>
    </div>
    <div className="grid grid-color">
      <Spinner isLoading={true} color="hsla(140, 2%, 50%, 0.5)" />
      <div className="text-center">
        <p>hsla:</p>
        <p>hsla(140, 2%, 50%, 0.5)</p>
      </div>
    </div>
  </div>
);
