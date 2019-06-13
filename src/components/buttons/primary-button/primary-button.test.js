// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import PrimaryButton from './index';

const component = props => (renderer.create(
  <PrimaryButton {...props} />,
));

describe('<PrimaryButton />', () => {
  test('Should render the component', () => {
    const tree = component({ children: 'My children' }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
