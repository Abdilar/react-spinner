import React from 'react';
import Spinner from '../';

import './Story.style.scss';

export default {
  title: 'Ratio Prop',
  component: Spinner
}

export const ratio = () => (
  <div>
    <div className="row">
      <div>
        <Spinner isLoading={true} ratio={0.5} />
        <div className="text-center">ratio: 0.5</div>
      </div>
      <div>
        <Spinner isLoading={true} ratio={1} />
        <div className="text-center">ratio: 1</div>
      </div>
      <div>
        <Spinner isLoading={true} ratio={2} />
        <div className="text-center">ratio: 2</div>
      </div>
    </div>
    <div className="row">
      <div>
        <Spinner isLoading={true} name="puff" ratio={0.5} />
        <div className="text-center">ratio: 0.5</div>
      </div>
      <div>
        <Spinner isLoading={true} name="puff" ratio={1} />
        <div className="text-center">ratio: 1</div>
      </div>
      <div>
        <Spinner isLoading={true} name="puff" ratio={2} />
        <div className="text-center">ratio: 2</div>
      </div>
    </div>
    <div className="row">
      <div>
        <Spinner isLoading={true} name="ball-triangle" ratio={0.5} />
        <div className="text-center">ratio: 0.5</div>
      </div>
      <div>
        <Spinner isLoading={true} name="ball-triangle" ratio={1} />
        <div className="text-center">ratio: 1</div>
      </div>
      <div>
        <Spinner isLoading={true} name="ball-triangle" ratio={2} />
        <div className="text-center">ratio: 2</div>
      </div>
    </div>
    <div className="row">
      <div>
        <Spinner isLoading={true} name="oval" ratio={0.5} />
        <div className="text-center">ratio: 0.5</div>
      </div>
      <div>
        <Spinner isLoading={true} name="oval" ratio={1} />
        <div className="text-center">ratio: 1</div>
      </div>
      <div>
        <Spinner isLoading={true} name="oval" ratio={2} />
        <div className="text-center">ratio: 2</div>
      </div>
    </div>
    <div className="row">
      <div>
        <Spinner isLoading={true} name="rings" ratio={0.5} />
        <div className="text-center">ratio: 0.5</div>
      </div>
      <div>
        <Spinner isLoading={true} name="rings" ratio={1} />
        <div className="text-center">ratio: 1</div>
      </div>
      <div>
        <Spinner isLoading={true} name="rings" ratio={2} />
        <div className="text-center">ratio: 2</div>
      </div>
    </div>
    <div className="row">
      <div>
        <Spinner isLoading={true} name="tail-spin" ratio={0.5} />
        <div className="text-center">ratio: 0.5</div>
      </div>
      <div>
        <Spinner isLoading={true} name="tail-spin" ratio={1} />
        <div className="text-center">ratio: 1</div>
      </div>
      <div>
        <Spinner isLoading={true} name="tail-spin" ratio={2} />
        <div className="text-center">ratio: 2</div>
      </div>
    </div>
    <div className="row">
      <div>
        <Spinner isLoading={true} name="three-dots" ratio={0.5} />
        <div className="text-center">ratio: 0.5</div>
      </div>
      <div>
        <Spinner isLoading={true} name="three-dots" ratio={1} />
        <div className="text-center">ratio: 1</div>
      </div>
      <div>
        <Spinner isLoading={true} name="three-dots" ratio={2} />
        <div className="text-center">ratio: 2</div>
      </div>
    </div>
    <div className="row">
      <div>
        <Spinner isLoading={true} name="grid" ratio={0.5} />
        <div className="text-center">ratio: 0.5</div>
      </div>
      <div>
        <Spinner isLoading={true} name="grid" ratio={1} />
        <div className="text-center">ratio: 1</div>
      </div>
      <div>
        <Spinner isLoading={true} name="grid" ratio={2} />
        <div className="text-center">ratio: 2</div>
      </div>
    </div>
  </div>
);
