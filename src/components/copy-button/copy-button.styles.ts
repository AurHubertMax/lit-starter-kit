import { css } from 'lit';

export default css`
  :host { // whatever the shadowroot is attached to, useful to isolate variables we dont want affected by global vars
    // --my-button-padding: 8px;
  }
  button {
    background-color: #c0ffee;
    padding: var(--my-button-padding);
  }

  :host([size="sm"]) {
    --my-button-padding: 10px;
  }

  // Comment this out because this is the default.
  // :host([size="md"]) {
  //   --my-button-padding: 8px;
  // }

  :host([size="lg"]) {
    --my-button-padding: 20px;
  }
`;
