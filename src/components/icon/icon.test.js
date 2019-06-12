// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import Icon from './index';

const component = props => (renderer.create(
  <Icon {...props} />,
));

describe('<Icon />', () => {
  test('Should render the component', () => {
    const tree = component({ name: 'check' }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should change the color when prop is set', () => {
    const tree = component({ name: 'check', color: 'primary' }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
