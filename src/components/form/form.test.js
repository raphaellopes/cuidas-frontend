// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import Form from './index';

const component = props => (renderer.create(
  <Form {...props} />,
));

describe('<Form />', () => {
  test('Should render the component', () => {
    const tree = component({ children: 'My children' }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
