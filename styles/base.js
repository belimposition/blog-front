import { css } from 'styled-components/macro';

const base = css`
  * {
    -webkit-overflow-scrolling: touch;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  ul li {
    margin: 0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
  }

  p {
    padding: 0;
    margin: 0;
  }

  button {
    padding: 0;
    background: transparent;
    font-size: inherit;
  }


  input[type='text'] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  html,
  body {
    height: 100%;
    all: initial;
    box-sizing: border-box;
    min-width: 320px;
    display: block;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    color: #000;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    padding-right: 0 !important;
    font-family: var(--font-graphic);
  }

`;

export default base;
