import React from 'react';
import Spinner from '../';

export default {
  title: 'Id Prop',
  component: Spinner
}

export const id = () => <Spinner id="test-spinner" isLoading={true} />
