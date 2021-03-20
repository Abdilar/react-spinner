import React from 'react';
import Spinner from '../';

export default {
  title: 'Is Loading Prop',
  component: Spinner
}

export const showSpinner = () => <Spinner isLoading={true} />
