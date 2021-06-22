import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import User from './User';

describe('User.tsx', () => {
  it('Should match snapshot', () => {
    expect(shallowToJson(shallow(<User />))).toMatchSnapshot();
  });
});
