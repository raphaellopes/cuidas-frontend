// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import SecondaryTitle from './index';

const component = props => (renderer.create(
  <SecondaryTitle {...props} />,
));

describe('<SecondaryTitle />', () => {
  test('Should render the component', () => {
    const tree = component({ children: 'my children' }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
