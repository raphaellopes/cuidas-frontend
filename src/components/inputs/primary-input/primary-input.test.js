// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import PrimaryInput from './index';

const component = props => (renderer.create(
  <PrimaryInput {...props} />,
));

describe('<PrimaryInput />', () => {
  test('Should render the component', () => {
    const tree = component({ children: 'My children' }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
