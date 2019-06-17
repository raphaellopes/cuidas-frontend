// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import Spinner from './index';

const component = () => (renderer.create(
  <Spinner />,
));

describe('<Spinner />', () => {
  test('Should render the component', () => {
    const tree = component().toJSON();
    expect(tree).toMatchSnapshot();
  });
});
