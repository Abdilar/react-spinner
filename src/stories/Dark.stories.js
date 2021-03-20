import React from 'react';
import Spinner from '../';

export default {
  title: 'Dark Prop',
  component: Spinner
}

export const dark = () => <Spinner isLoading={true} overlay={true} dark={true}/>
