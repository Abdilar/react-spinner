import React from 'react';
import Spinner from '../';
import {number, text, boolean, radios} from '@storybook/addon-knobs';

export default {
  title: 'Editable Example',
  component: Spinner
}

export const example = () => (
  <div className="grid">
    <Spinner
      id={text('ID', 'unique-id')}
      isLoading={boolean('Is Loading', true)}
      overlay={boolean('Overlay', false)}
      blur={boolean('Blur', false)}
      dark={boolean('Dark', false)}
      ratio={number('Ratio', 1)}
      name={radios('Name', {uikit: 'uikit', ballTriangle: 'ball-triangle', grid: 'grid', oval: 'oval', puff: 'puff', rings: 'rings', tailSpin: 'tail-spin', threeDots: 'three-dots'},'uikit')}
      position={radios('Position', {top: 'TOP', right: 'RIGHT', bottom: 'BOTTOM', left: 'LEFT', center: 'CENTER'},'CENTER')}
      mode={radios('Mode',{inside: 'inside', full: 'full'},'inside')}
      color={text('Color', '#ff00ff')}
    />
    <div className="text-center relative">Editable Example</div>
  </div>
);
