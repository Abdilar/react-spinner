import React, {useState} from 'react';
import Spinner from '../';

export default {
  title: 'Icon',
  component: Spinner
}

export const UIkit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const htmlEl = document.getElementsByTagName('html')[0];
  htmlEl.dir = 'rtl'

  return (
  <>
    <div className="test">
      <span>HELLO</span>
      <Spinner className={{spinner: 'color-blue'}} isLoading={isLoading}/>
    </div>
    <button type="button" onClick={() => setIsLoading(!isLoading)}>loading</button>
  </>
);
};


UIkit.storyName = "Can close detail section";
