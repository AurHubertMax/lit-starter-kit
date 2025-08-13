import './index.js';
import { expect, fixture, html } from '@open-wc/testing';
import type { MyCopyButton } from './copy-button.js';

describe('MyCopyButton', () => {
  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<MyCopyButton>(html`<my-copy-button></my-copy-button>`);
      await expect(el).to.be.accessible();
    });
  });
});
