import React from 'react';
import Spinner from '../';

export default {
  title: 'Blur Prop',
  component: Spinner
}

export const blur = () => (
  <div className="grid color-light-blue">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    <Spinner isLoading={true} blur={true} />
  </div>
);
