// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import PrimaryTitle from './index';

const component = props => (renderer.create(
  <PrimaryTitle {...props} />,
));

describe('<PrimaryTitle />', () => {
  test('Should render the component', () => {
    const tree = component({ children: 'my children' }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
