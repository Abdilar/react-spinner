import React from 'react';
import Spinner from '../';

export default {
  title: 'Overlay Prop',
  component: Spinner
}

export const overlay = () => <Spinner isLoading={true} overlay={true} />
