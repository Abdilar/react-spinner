import React from 'react';
import Spinner from '../';

export default {
  title: 'Mode Prop',
  component: Spinner
}

export const full = () => (
  <div className="grid color-light-blue">
    <Spinner isLoading={true} overlay={true} mode="full" />
  </div>
);
export const inside = () => (
  <div className="grid color-light-blue">
    <Spinner isLoading={true} overlay={true} mode="inside" />
  </div>
)
