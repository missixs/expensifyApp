//used for enzyme
//run these files before running actual test files  
//in jest.config.json in setupFiles it is specified to run these test 

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DotEnv from 'dotenv';

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});