// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import BoxError from './index';

const component = props => (renderer.create(
  <BoxError {...props} />,
));

describe('<BoxError />', () => {
  test('Should render the component', () => {
    const tree = component({ children: 'My mesage' }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
