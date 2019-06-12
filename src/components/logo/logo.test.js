// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import Logo from './index';

const component = renderer.create(
  <Logo />,
);

describe('<Logo />', () => {
  test('Should render the component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
