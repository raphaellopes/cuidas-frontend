// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import BaseButton from './index';

const component = props => (renderer.create(
  <BaseButton {...props} />,
));

describe('<BaseButton />', () => {
  test('Should render the component', () => {
    const tree = component({ children: 'My children' }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should change the color when prop is set', () => {
    const props = { children: 'My children', color: 'primary' };
    const tree = component(props).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should change the backgroundColor when prop is set', () => {
    const props = { children: 'My children', backgroundColor: 'primary' };
    const tree = component(props).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
