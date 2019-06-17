// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import Toast from './index';

const component = props => (renderer.create(
  <Toast {...props} />,
));

describe('<Toast />', () => {
  test('Should render the component', () => {
    const tree = component({ children: 'My mesage' }).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should dipatch onTimeout when the prop is set', () => {
    const tree = component({
      children: 'My mesage',
      onTimeout: () => ({}),
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
