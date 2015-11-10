/**
 * Created by dinhquangtrung on 11/10/15.
 */
import React from 'react/addons';
import App from '../App.jsx';
import { expect } from 'chai';
import { describe, it } from 'mocha';

const { TestUtils } = React.addons;

describe('App', () => {
  it('Should have the bootstrap button', () => {
    const app = TestUtils.renderIntoDocument(
      <App />
    );
    const appElement = React.findDOMNode(app);
    expect(appElement.findElementById('the-bootstrap-btn').id).to.equal('the-bootstrap-btn');
  });
});
