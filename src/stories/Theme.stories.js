import React from 'react';
import Spinner from '../';

export default {
  title: 'Theme Prop',
  component: Spinner
}

export const className = () => {
  const customClass = {
    wrapper: 'color-lighten-red',
    spinner: 'color-dark-green'
  };

  return (
    <div className="grid">
      <Spinner isLoading={true} className={customClass} />
    </div>
  );
}
