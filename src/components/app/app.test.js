// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import App from './index';

jest.mock('redux-saga', () => () => ({ run: jest.fn() }));

const component = renderer.create(
  <App>
    My children text
  </App>,
);

describe('<App />', () => {
  test('Should render the component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
