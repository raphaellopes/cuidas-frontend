// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import BaseInput from './index';

const component = props => (renderer.create(
  <BaseInput {...props} />,
));

describe('<BaseInput />', () => {
  test('Should render the component', () => {
    const tree = component().toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should change the color when prop is set', () => {
    const props = { color: 'primary' };
    const tree = component(props).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should change the borderColor when prop is set', () => {
    const props = { borderColor: 'primary' };
    const tree = component(props).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
