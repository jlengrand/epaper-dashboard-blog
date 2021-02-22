import { html, fixture, expect } from '@open-wc/testing';

import { PaperDashboard } from '../src/PaperDashboard.js';
import '../src/paper-dashboard.js';

describe('PaperDashboard', () => {
  let element: PaperDashboard;
  beforeEach(async () => {
    element = await fixture(html`<paper-dashboard></paper-dashboard>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
