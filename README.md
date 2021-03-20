# @sakit-sa/react-spinner

> Simple, easy spinner for React

[![NPM](https://img.shields.io/npm/v/@sakit-sa/react-spinner.svg)](https://www.npmjs.com/package/@sakit-sa/react-spinner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Spinner

![Spinner gif](https://raw.githubusercontent.com/Abdilar/react-spinner/master/src/asset/images/spinner.gif)

## Live Playground
For examples of the react-spinner in action, go to https://abdilar.github.io/react-spinner.

OR

To run that demo on your own computer:
* Clone this repository
* `npm install`
* `npm run storybook`
* Visit http://localhost:6006/

## Getting Started
### Install

```sh
npm install @sakit-sa/react-spinner
```

### Usage
```jsx
import React from 'react';

import Spinner, {POSITIONS, MODE, NAME} from '@sakit-sa/react-spinner';
import '@sakit-sa/react-spinner/dist/index.css';

const App = () => (
  <Spinner
    isLoading={true}
    name={NAME.PUFF}
    mode={MODE.INSIDE}
    position={POSITIONS.CENTER}
  />
);
```

### Props
Name | Type | Default | Description
-----|------|-------|-----
**isLoading**|`boolean`|`false`|Boolean value to control whether the spinner is shown.
**name**|`string`|`uikit`|Specifies the name of the spinner (name includes: `uikit`, `puff`, `grid`, `oval`, `rings`, `ball-triangle`, `tail-spin`, `three-dots`).
**mode**|`string`|`inside`|Specifies the mode of the spinner (mode includes: `inside`, `full`).
**className**|`object`|`{}`|Apply a className to the control
**overlay**|`boolean`|`false`|Boolean value to control whether the spinner has an overlay.
**blur**|`boolean`|`false`|Boolean value to set the blur of the spinner background.
**dark**|`boolean`|`false`|Boolean value to set the darkness of the spinner background.
**id**|`string`|`spinner-[randomNumber(10000)]`|The unique identifier for the component.
**ratio**|`number`|`1`|Specifies the size of the spinner.
**color**|`string`|`''`|Specifies the color of the spinner (color format: `#ff00bb`, `rgb(124, 100, 0)`, `rgb(100%, 2.5%, 0%)`, `rgba(255, 0, 0, 0.5)`, `hsl(140, 2%, 50%)`, `hsla(140, 2%, 50%, 0.5)`).
**position**|`string`|`CENTER`|Specifies the position of the spinner (position includes: `BOTTOM`, `CENTER`, `LEFT`, `RIGHT`, `TOP`).

### className Token
`wrapper` `spinner`

See examples for more information (go to https://abdilar.github.io/react-spinner/?path=/story/theme-prop--class-name)

### License

MIT © [Saeed Abdilar](https://github.com/Abdilar)
