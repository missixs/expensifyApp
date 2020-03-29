import React from 'react';

import { LoginPage } from '../../components/LoginPage'
import { shallow } from 'enzyme';

let startLoginSpy, wrapper; 

beforeEach(()=>{
    startLoginSpy = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLoginSpy}/>);

});

test('should render button correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', ()=>{
    wrapper.find('button').simulate('Click');
    expect(startLoginSpy).toHaveBeenCalled();
});
