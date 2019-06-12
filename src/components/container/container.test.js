// vendors
import React from 'react';
import renderer from 'react-test-renderer';

// locals
import Container from './index';

const component = renderer.create(
  <Container>
    My children text
  </Container>,
);

describe('<Container />', () => {
  test('Should render the component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
