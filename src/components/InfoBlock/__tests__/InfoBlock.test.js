import React from 'react';
import renderer from 'react-test-renderer';

import InfoBlock from '../';

describe('InfoBlock', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <InfoBlock
          title="Title"
          description="Description"
          titleTextStyle={{ color: 'red' }}
          descriptionTextStyle={{ color: 'red' }}
          style={{ backgroundColor: 'blue' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with maximum required props', () => {
    expect(renderer.create(<InfoBlock />)).toMatchSnapshot();
  });
});
